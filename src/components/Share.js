import React from "react";
import FacebookShare from "./FacebookShare";
import TwitterShare from "./TwitterShare";

export default function Share() {
  return (
    <div className="share">
      <h3>If you like that joke, go ahead and share it with the world!</h3>
      <h4>Don't listen to Rupert, he is just jealous. </h4>
      <FacebookShare />
      <TwitterShare />
    </div>
  );
}
