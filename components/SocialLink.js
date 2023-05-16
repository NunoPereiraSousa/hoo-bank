import Link from "next/link";
import React from "react";

const SocialLink = ({ image, link }) => {
  return (
    <Link href={link} className="copyright_social">
      <img src={image.url} alt={image.alt} className="copyright_social_image" />
    </Link>
  );
};

export default SocialLink;
