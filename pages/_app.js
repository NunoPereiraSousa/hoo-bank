import "../styles/index.scss";
import "../node_modules/flag-icons/css/flag-icons.min.css";

import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../prismicio";
import { Paragraph } from "../components/Paragraph";
import { Heading } from "../components/Heading";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const richTextComponents = {
  paragraph: ({ children }) => <Paragraph size="sm">{children}</Paragraph>,
  heading1: ({ children }) => (
    <Heading as="h1" size="xl">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="md">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="sm">
      {children}
    </Heading>
  ),
  oList: ({ children }) => <ol className="">{children}</ol>,
  oListItem: ({ children }) => <li className="">{children}</li>,
  list: ({ children }) => <ul className="">{children}</ul>,
  listItem: ({ children }) => <li className="">{children}</li>,
  preformatted: ({ children }) => (
    <pre className="">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="">
      {children}
    </PrismicLink>
  ),
};

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale} legacyBehavior>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default function App({ Component, pageProps }) {
  const element = useRef(null);

  useEffect(() => {
    gsap.to(element.current, {
      opacity: 1,
      ease: "expo.out",
      duration: 2,
      yPercent: -4,
      delay: 0.35,
    });
  }, []);

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <div ref={element} className="page">
          <Component {...pageProps} />
        </div>
      </PrismicPreview>
    </PrismicProvider>
  );
}
