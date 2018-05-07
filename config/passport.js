/* Import passport modules and method */
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
/* Import mongoose, and the user model */
const mongoose = require("mongoose");
const User = mongoose.model("users");
/* Bring in the mongodb key */
const keys = require("../config/keys");

/*
- Create a variable opts (opions)
- Set initial value to an empty object for the JWT extraction
- Add the jwtRequest and key to the opts object. This wll help with
  managing the bearer token.
*/
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

/*
- Export passport as a module to be passed in the server.js Passport middleware.
  This will take care of authentcated routes.
- Create a new intance of the JwtStrategy using passport.
- Add the opts(options) to the JWTStrategy parameter, as it needs a key.
- Pass the jwt payload. This contains the user details.
 */
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // Find the user by Id, and return that id from the jwt_payload
      // If the user exist, return the user.
      // If user does not exist, return null.
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
