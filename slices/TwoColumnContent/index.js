import AdvantagesItem from "@/components/AdvantagesItem";
import MobileAppButton from "@/components/MobileAppButton";
import { PrismicRichText } from "@prismicio/react";
import Figure from "@/components/Figure";

/**
 * @typedef {import("@prismicio/client").Content.TwoColumnContentSlice} TwoColumnContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TwoColumnContentSlice>} TwoColumnContentProps
 * @param {TwoColumnContentProps}
 */
const TwoColumnContent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice?.slice_type}
      data-slice-variation={slice?.variation}
      className={"info " + slice?.variation}
    >
      <div className="info_wrapper">
        {slice?.variation === "default" && (
          <>
            <div className="info_content">
              <div className="info_headline">
                <PrismicRichText field={slice?.primary.headline} />
              </div>

              <div className="info_description">
                <PrismicRichText field={slice?.primary.description} />
              </div>

              <button className="info_button">
                {slice?.primary.button_label[0].text}
              </button>
            </div>

            <div className="info_list">
              {slice?.items?.map((item, index) => (
                <AdvantagesItem
                  key={index}
                  icon={item.icon}
                  headline={item.headline}
                  description={item.description}
                />
              ))}
            </div>
          </>
        )}

        {slice?.variation === "withButtons" && (
          <>
            <Figure
              figureClassName="info_figure"
              imageClassName="info_figure_image"
              src={slice?.primary?.image.url}
              alt={slice?.primary?.image.alt}
            />

            <div className="info_content">
              <div className="info_headline">
                <PrismicRichText field={slice?.primary.headline} />
              </div>

              <div className="info_description">
                <PrismicRichText field={slice?.primary.description} />
              </div>

              <div className="info_buttons">
                {slice?.items?.map((logo, index) => (
                  <MobileAppButton key={index} icon={logo.icon} />
                ))}
              </div>
            </div>
          </>
        )}

        {slice?.variation === "withButtonNoList" && (
          <>
            <div className="info_content">
              <div className="info_headline">
                <PrismicRichText field={slice?.primary.headline} />
              </div>

              <div className="info_description">
                <PrismicRichText field={slice?.primary.description} />
              </div>

              <button className="info_button">
                {slice?.primary.button_label[0].text}
              </button>
            </div>

            <Figure
              figureClassName="info_figure"
              imageClassName="info_figure_image"
              src={slice?.primary?.image.url}
              alt={slice?.primary?.image.alt}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default TwoColumnContent;
