import Header from "components/Header";
import "../styles/globals.scss";
import Navbar from "react-bootstrap/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
