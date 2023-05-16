import { PrismicLink, PrismicText } from "@prismicio/react";
import { useRouter } from "next/router";

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param {NavigationItemProps}
 */
const NavigationItem = ({ slice }) => {
  const router = useRouter();

  return (
    <PrismicLink
      field={slice?.primary?.link}
      className={
        router.pathname == slice?.primary?.link.url
          ? "navigation_link active"
          : "navigation_link"
      }
    >
      <PrismicText field={slice?.primary?.name} />
    </PrismicLink>
  );
};

export default NavigationItem;
