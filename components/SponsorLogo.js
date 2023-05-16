import React from "react";
import Figure from "./Figure";

const SponsorsLogo = ({ logo }) => {
  return (
    <Figure
      imageOnly={true}
      imageClassName="sponsors_image"
      src={logo.url}
      alt={logo.alt}
    />
  );
};

export default SponsorsLogo;
