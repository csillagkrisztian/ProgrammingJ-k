import React from "react";
import FacebookShare from "./FacebookShare";
import TwitterShare from "./TwitterShare";

export default function Share() {
  return (
    <div className="share">
      <h4>If you like that joke, go ahead and share it with the world!</h4>
      <h5>Don't listen to Rupert, he is just jealous. </h5>
      <FacebookShare />
      <TwitterShare />
    </div>
  );
}
