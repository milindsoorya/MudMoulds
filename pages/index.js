import styles from "../styles/Home.module.scss";
import fetch from "isomorphic-unfetch";

import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

export default function Home({ movies }) {
  return (
    <>
      <div className={styles.container}>
        <ImageSlider slides={SliderData} />
        {/* <div className={styles.card_container}>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div> */}
      </div>
    </>
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
