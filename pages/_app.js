import Header from "components/Header";
import "../styles/globals.scss";
import SlideShow from "../components/SlideShow";
import Footer from "../components/Footer";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <SlideShow />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
