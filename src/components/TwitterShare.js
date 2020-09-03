import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { useSelector } from "react-redux";
import { selectJoke } from "../store/joke/selectors";

export default function TwitterShare() {
  const joke = useSelector(selectJoke);
  return (
    <TwitterShareButton
      url={`${joke.setup}...${joke.punchline}😂😂😂`}
      hashtag="#programing joke"
    >
      <TwitterIcon size={36} />
    </TwitterShareButton>
  );
}
