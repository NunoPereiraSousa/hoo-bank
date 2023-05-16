import SponsorsLogo from "@/components/SponsorLogo";

/**
 * @typedef {import("@prismicio/client").Content.SponsorsSlice} SponsorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SponsorsSlice>} SponsorsProps
 * @param {SponsorsProps}
 */
const Sponsors = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="sponsors">
      <div className="sponsors_wrapper">
        <div className="sponsors_grid">
          {slice?.items?.map((sponsor, index) => (
            <SponsorsLogo key={index} logo={sponsor.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
