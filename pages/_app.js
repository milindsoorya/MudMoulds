import Header from "components/Header";
import "../styles/globals.scss";
import Navbar from "react-bootstrap/Navbar";
import SlideShow from "../components/SlideShow";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SlideShow />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
