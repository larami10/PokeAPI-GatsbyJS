import * as React from "react";
import Layout from "../components/Layout";
import CarouselHome from "../components/CarouselHome";
import { Seo } from "../components/Seo";

/**
 * Index page will display the Pokemon Starters in Carousels
 */
const IndexPage = () => {
  return (
    <Layout>
      <CarouselHome />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo title="Home Page" description="Starter Pokemon" />
);
