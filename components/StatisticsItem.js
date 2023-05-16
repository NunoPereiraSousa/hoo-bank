import React from "react";
import { PrismicRichText } from "@prismicio/react";

const StatisticsItem = ({ number, description }) => {
  return (
    <div className="statistics_item">
      <div className="statistics_item_number">
        <PrismicRichText field={number} />
      </div>

      <div className="statistics_item_description">
        <PrismicRichText field={description} />
      </div>
    </div>
  );
};

export default StatisticsItem;
