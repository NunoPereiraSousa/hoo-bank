import { PrismicRichText } from "@prismicio/react";
import Figure from "@/components/Figure";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="hero">
      <div className="hero_wrapper">
        <div className="hero_left">
          <div className="hero_toolbar">
            <Figure
              figureClassName=""
              imageClassName="hero_toolbar_icon"
              src={slice?.primary?.toolbar_icon.url}
              alt={slice?.primary?.toolbar_icon.alt}
            />

            <div className="hero_toolbar_label">
              <PrismicRichText field={slice?.primary?.toolbar_label} />
            </div>
          </div>

          <div className="hero_left_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>

          <div className="hero_left_description">
            <PrismicRichText field={slice?.primary?.label} />
          </div>

          <button className="hero_left_button">
            {slice?.primary?.button_label[0].text}
          </button>
        </div>

        <div className="hero_right">
          <Figure
            figureClassName="hero_figure"
            imageClassName="hero_image"
            src={slice?.primary?.hero_image.url}
            alt={slice?.primary?.hero_image.alt}
          />
        </div>
      </div>

      <div className="hero_blob"></div>
    </section>
  );
};

export default Hero;
