import React from "react";
import { PrismicRichText } from "@prismicio/react";

const TestimonialCard = ({ quote, name, role, quoteImage, profileImage }) => {
  return (
    <div className="testimonial_card">
      <img
        className="testimonial_quote_image"
        src={quoteImage.url}
        alt={quoteImage.alt}
      />

      <div className="testimonial_quote">
        <PrismicRichText field={quote} />
      </div>

      <div className="testimonial_profile">
        <figure className="testimonial_profile_figure">
          <img
            className="testimonial_profile_image"
            src={profileImage.url}
            alt={profileImage.alt}
          />
        </figure>

        <div className="testimonial_profile_info">
          <div className="testimonial_profile_name">
            <PrismicRichText field={name} />
          </div>

          <div className="testimonial_profile_role">
            <PrismicRichText field={role} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
