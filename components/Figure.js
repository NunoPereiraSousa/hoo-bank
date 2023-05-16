import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Figure = ({
  imageOnly = false,
  figureClassName,
  imageClassName,
  src,
  alt,
}) => {
  const element = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      element.current,
      {
        autoAlpha: 0,
        yPercent: 20,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element.current,
          // markers: true,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <>
      {imageOnly === false ? (
        <figure className={figureClassName}>
          <img className={imageClassName} src={src} alt={alt} ref={element} />
        </figure>
      ) : (
        <img className={imageClassName} src={src} alt={alt} ref={element} />
      )}
    </>
  );
};

export default Figure;
