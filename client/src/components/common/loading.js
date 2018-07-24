import React from "react";
import loading from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div>
      <img src={loading} style={loadingStyle} alt="loading..." />
    </div>
  );
};

const loadingStyle = {
  width: "45px",
  margin: "auto",
  display: "block"
};

export default Loading;
