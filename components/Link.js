import React, { useRef, useEffect } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Link = ({ path, className, text }) => {
  const element = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      element.current,
      {
        autoAlpha: 0,
        yPercent: 40,
      },
      {
        visibility: "visible",
        opacity: 0.7,
        yPercent: 0,
        duration: 0.75,
        ease: "expo.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: element.current,
          // markers: true,
          start: "80% bottom",
        },
      }
    );
  }, []);

  return (
    <PrismicLink ref={element} field={path} className={className}>
      <PrismicText field={text} />
    </PrismicLink>
  );
};

export default Link;
