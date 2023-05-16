import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { useEffect } from "react";
import Link from "@/components/Link";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice, context }) => {
  const filterLinksByCategory = () => {
    let links = context.data.links;

    let array = {
      "useful-links": links.filter(
        (link) => link.link_category === "Usefull Links"
      ),
      community: links.filter((link) => link.link_category === "Community"),
      partner: links.filter((link) => link.link_category === "Partner"),
    };

    return array;
  };

  const deleteDuplicate = () => {
    let links = context.data.links;
    let final = links
      .filter(
        (value, index, self) =>
          index ===
          self.findIndex((v) => v.link_category === value.link_category)
      )
      .map((el) => el.link_category);
  };

  useEffect(() => {
    deleteDuplicate();
    filterLinksByCategory();
  }, []);

  return (
    <footer data-slice-type={slice.slice_type} className="footer">
      <div className="footer_wrapper">
        <div className="footer_info">
          <figure className="footer_figure">
            <img
              src={slice?.primary?.logo?.url}
              alt={slice?.primary?.logo?.alt}
              className="footer_logo"
            />
          </figure>

          <div className="footer_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>
        </div>

        <div className="footer_links">
          <div className="footer_links_column">
            <p className="footer_category">Useful Links</p>
            <div className="footer_links_wrapper">
              {context?.data?.links?.map(
                (menu, index) =>
                  menu.link_category === "Usefull Links" && (
                    <Link
                      key={index}
                      path={menu.link}
                      className="footer_link"
                      text={menu.link_name}
                    />
                  )
              )}
            </div>
          </div>

          <div className="footer_links_column">
            <p className="footer_category">Community</p>
            <div className="footer_links_wrapper">
              {context?.data?.links?.map(
                (menu, index) =>
                  menu.link_category === "Community" && (
                    <Link
                      key={index}
                      path={menu.link}
                      className="footer_link"
                      text={menu.link_name}
                    />
                  )
              )}
            </div>
          </div>

          <div className="footer_links_column">
            <p className="footer_category">Partner</p>
            <div className="footer_links_wrapper">
              {context?.data?.links?.map(
                (menu, index) =>
                  menu.link_category === "Partner" && (
                    <Link
                      key={index}
                      path={menu.link}
                      className="footer_link"
                      text={menu.link_name}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
