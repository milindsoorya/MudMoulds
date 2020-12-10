import Header from "components/Header";
import "../styles/globals.scss";
import SlideShow from "../components/SlideShow";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SlideShow />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
