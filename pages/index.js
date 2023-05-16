import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { components } from "../slices";
import Layout from "@/components/Layout";

export default function Page({
  navigation,
  menus,
  page,
  metaTitle,
  metaDescription,
}) {
  return (
    <Layout navigation={navigation} menus={menus}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={menus}
      />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  const navigation = await client.getSingle("navigation");
  const menus = await client.getSingle("menus");

  return {
    props: {
      navigation,
      menus,
      page,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
    },
  };
}
