import SocialLink from "@/components/SocialLink";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.CopyrightBarSlice} CopyrightBarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CopyrightBarSlice>} CopyrightBarProps
 * @param {CopyrightBarProps}
 */
const CopyrightBar = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="copyright">
      <div className="copyright_wrapper">
        <div className="copyright_info">
          <div className="copyright_description">
            <PrismicRichText field={slice.primary.copyright} />
          </div>
          <div className="copyright_description">
            <PrismicRichText field={slice.primary.symbol} />
          </div>
          <div className="copyright_description">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>

        <div className="copyright_socials">
          {slice?.items?.map((item, index) => (
            <SocialLink
              key={index}
              image={item.social_icon}
              link={item.social_link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopyrightBar;
