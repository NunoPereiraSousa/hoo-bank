import { PrismicRichText } from "@prismicio/react";
import TestimonialCard from "@/components/TestimonialCard";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="testimonials">
      <div className="testimonials_wrapper">
        <div className="testimonials_headlines">
          <div className="testimonials_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>
          <div className="testimonials_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>
        </div>

        <div className="testimonials_grid">
          {slice?.items?.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              quoteImage={testimonial.quote_image}
              profileImage={testimonial.profile_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
