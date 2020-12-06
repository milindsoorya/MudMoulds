import styles from "../styles/Home.module.scss";
import fetch from "isomorphic-unfetch";

import Card from "../components/Card";

import { SliderData } from "../components/SliderData";
import SlideShow from "../components/SlideShow";

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <SlideShow />
    </div>
  );
}

// export async function getServerSideProps() {
//   const { API_URL } = process.env;

//   const res = await fetch(`${API_URL}/movies`);
//   const data = await res.json();

//   return {
//     props: {
//       movies: data,
//     },
//   };
// }
