import styles from "./Card.module.scss";
import Link from "next/link";

function Card({ movie }) {
  const { API_URL } = process.env;

  if (!movie.genre) {
    movie.genre = {};
    movie.genre.slug = "uncategorised";
  }

  return (
    <div className={styles.cardStyled}>
      {movie.poster && (
        <div className={styles.poster}>
          <img src={API_URL + movie.poster.url} alt="" />
        </div>
      )}
      <div className={styles.body}>
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
        <Link href={`/products/${movie.genre.slug}/${movie.slug}`}>
          <a>More about this thing</a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
