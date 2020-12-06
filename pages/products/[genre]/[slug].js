//import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

function Product({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: movie.description }}></p>
    </div>
  );
}

//const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { slug } = context.query;
  const res = await fetch(`${API_URL}/movies?slug=${slug}`);
  const data = await res.json();

  return {
    props: { movie: data[0] },
  };
}

export default Product;
