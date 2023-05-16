import React from "react";
import NavigationItem from "@/slices/NavigationItem";

const Header = ({ navigation }) => {
  return (
    <div className="navigation">
      <div className="navigation_wrapper">
        <img
          src={navigation?.data?.logo?.url}
          alt={navigation?.data?.logo?.alt}
        />

        <div className="navigation_links">
          {navigation?.data?.slices?.map((item, index) => [
            <NavigationItem key={index} slice={item} />,
          ])}
        </div>
      </div>
    </div>
  );
};

export default Header;
