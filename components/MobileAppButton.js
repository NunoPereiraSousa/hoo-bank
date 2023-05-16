import React from "react";

const MobileAppButton = ({ icon }) => {
  return (
    <button className="mobile_app_button">
      <img src={icon.url} alt={icon.alt} />
    </button>
  );
};

export default MobileAppButton;
