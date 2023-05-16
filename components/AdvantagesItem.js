import React from "react";
import { PrismicRichText } from "@prismicio/react";

const AdvantagesItem = ({ icon, headline, description }) => {
  return (
    <div className="advantage_item">
      <img src={icon.url} alt={icon.alt} className="advantage_item_icon" />

      <div className="advantage_item_info">
        <div className="advantage_item_info_headline">
          <PrismicRichText field={headline} />
        </div>

        <div className="advantage_item_info_description">
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesItem;
