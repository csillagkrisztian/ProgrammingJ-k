import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function SocialMediaButtons(props) {
  return (
    <FacebookShareButton
      url={""}
      quote={"Programming Jöökes to cheer You Öp!"}
      hashtag="#jöök"
      className={classes.socialMediaButton}
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}
