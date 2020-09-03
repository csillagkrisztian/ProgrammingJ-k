import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useSelector } from "react-redux";
import { selectJoke } from "../store/joke/selectors";

export default function SocialMediaButtons() {
  const joke = useSelector(selectJoke);

  return (
    <FacebookShareButton
      url={"https://programmingjook.netlify.app/"}
      quote={`${joke.setup}...${joke.punchline}`}
      hashtag="#jöök"
      className="facebook-share-button"
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}
