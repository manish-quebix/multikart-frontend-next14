import MainLayout from "@/Layout";
import React from "react";

/* export async function generateMetadata() {
  // fetch data
  const themeOption = await fetch(`${process.env.API_PROD_URL}/themeOptions`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
  return {
    metadataBase: new URL(process.env.API_PROD_URL),
    title: themeOption?.options?.seo?.meta_tags,
    description: themeOption?.options?.seo?.meta_description,
    icons: {
      // icon: themeOption?.options?.logo?.favicon_icon?.original_url,
      icon: "https://api.theheavenlygifts.com//storage//4049//theheavenlygifts-favicon.png",
      link: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Yellowtail&display=swap",
      },
    },
    openGraph: {
      title: themeOption?.options?.seo?.og_title,
      description: themeOption?.options?.seo?.og_description,
      images: [themeOption?.options?.seo?.og_image?.original_url, []],
    },
  };
} */

const Layout = ({ children }) => {

  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default Layout;
