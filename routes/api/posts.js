/* Import module */
const express = require("express");
const router = express.Router();
const passport = require("passport");
/* Import validator */
const validatePost = require("../../validation/post");
/* Import post model */
const Post = require("../../models/Post");

/*
 * @method: GET
 * @return:  /api/posts
 * @description: Get all posts
 * @access:  PUBLIC
 */
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => {
      if (!posts || posts.length === 0) {
        return res
          .status(404)
          .json({ NotFound: "There are currently no posts" });
      } else {
        return res.json(posts);
      }
    })
    .catch(err => res.status(404).json(err));
});

/*
 * @method: GET
 * @return:  /api/posts/:post_id
 * @description: Get single post
 * @access:  PUBLIC
 */
router.get("/:post_id", (req, res) => {
  Post.findById(req.params.post_id)
    .then(post => {
      if (!post || post.length === "null") {
        return res
          .status(404)
          .json({ NotFound: "request failed: ObjectID does not exist" });
      }
    })
    .catch(err =>
      res.status(403).json({
        Forbidden: (err.message = "request failed: ObjectID is not valid")
      })
    );
});

/*
 * @method: POST
 * @return:  /api/posts
 * @description: create posts
 * @access:  PRIVATE
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePost(req.body);
    // Check validation
    if (!isValid) {
      // Return errors
      return res.status(400).json(errors);
    }
    // Create new Post
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });
    //Save new post
    newPost.save().then(post => res.json(post));
  }
);

/*
 * @method: DELETE
 * @return:  /api/posts/:post_id
 * @description: delete post
 * @access:  PRIVATE
 */
router.delete(
  "/:post_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find the post ID to be deleted
    Post.findById(req.params.post_id)
      .then(post => {
        // Make sure the user deleting the post, is the owner.
        // if user is not the owner, return unauthorized message
        if (post.user.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ UnAuthorized: "Request Permission denied" });
        } else {
          // User is the owner, and can delete
          post.remove().then(() => res.json({ success: true }));
        }
      })
      .catch(err =>
        res.status(403).json({
          Forbidden: (err.message = "request failed: ObjectID does not exist")
        })
      );
  }
);

/*
 * @method: POST
 * @return:  /api/posts/like/:post_id
 * @description: like post
 * @access:  PRIVATE
 */
router.post(
  "/like/:post_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find the post ID to be liked
    Post.findById(req.params.post_id)
      .then(post => {
        // Check to see if user has already liked the post.
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res
            .status(403)
            .json({ Forbidden: "You already liked this post" });
        }
        // Add user id to the likes
        post.likes.unshift({ user: req.user.id });
        post.save().then(post => res.json(post));
      })
      .catch(err =>
        res.status(403).json({
          Forbidden: (err.message = "request failed: ObjectID does not exist")
        })
      );
  }
);

/*
 * @method: delete
 * @return:  /api/posts/unlike/:post_id
 * @description: unlike  post
 * @access:  PRIVATE
 */
router.post(
  "/unlike/:post_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find the post ID to be liked
    Post.findById(req.params.post_id)
      .then(post => {
        // Check to see if user has not liked the post.
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length === 0
        ) {
          return res
            .status(403)
            .json({ Forbidden: "You have not liked this post" });
        }
        // If user already liked post, user can unlike post
        post.likes.splice({ _id: req.params.post_id });
        // Save updated post
        post
          .save()
          .then(post => res.json(post))
          .catch(err =>
            res.status(403).json({
              Forbidden: (err.message =
                "request failed: ObjectID does not exist")
            })
          );
      })
      .catch(err =>
        res.status(403).json({
          Forbidden: (err.message = "request failed: ObjectID does not exist")
        })
      );
  }
);

/*
 * @method: POST
 * @return:  /api/posts/comment/:post_id
 * @description: Add comments to post
 * @access:  PRIVATE
 */
router.post(
  "/comment/:post_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePost(req.body);
    // Check validation
    if (!isValid) {
      // Return errors
      return res.status(400).json(errors);
    }
    // Find the post ID to add comment
    Post.findById(req.params.post_id)
      .then(post => {
        // Create new comment instance
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };
        // Add to the array of comments
        post.comments.unshift(newComment);
        // Save post
        post.save().then(post => res.json(post));
      })
      .catch(err =>
        res.status(404).json({
          NotFound: (err.message = "No Post found")
        })
      );
  }
);

/*
 * @method: DELETE
 * @return:  /api/posts/comment/:post_id/:comment_id
 * @description: Delete comments from post
 * @access:  PRIVATE
 */
router.delete(
  "/comment/:post_id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find the post ID to add comment
    Post.findById(req.params.post_id)
      .then(post => {
        // Check if comment exist
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res.status(404).json({ NotFound: "Comment does not exist" });
        }
        // Make sure the user deleting the comment, is the owner.
        // if not user comment, return unauthorized message

        const removeIndex = post.comments
          .map(comment => comment._id.toString())
          .indexOf(req.params.comment_id);

        //Make sure only the comment owner can delete comment
        if (post.comments[removeIndex].user.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ UnAuthorized: "Request Permission denied" });
        }
        post.comments.splice(removeIndex, 1);
        post.save().then(post => res.json(post));
      })
      .catch(err =>
        res.status(404).json({
          NotFound: (err.message = "No Post found")
        })
      );
  }
);

/* export router module */
module.exports = router;
