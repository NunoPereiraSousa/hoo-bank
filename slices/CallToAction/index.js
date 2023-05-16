import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param {CallToActionProps}
 */
const CallToAction = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="call_to_action">
      <div className="call_to_action_wrapper">
        <div className="call_to_action_text">
          <div className="call_to_action_headline">
            <PrismicRichText field={slice?.primary?.headline} />
          </div>
          <div className="call_to_action_description">
            <PrismicRichText field={slice?.primary?.description} />
          </div>
        </div>

        <button className="call_to_action_button">
          {slice?.primary?.button_label[0].text}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
