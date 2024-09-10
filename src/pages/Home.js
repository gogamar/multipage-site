import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  console.log("articles", articles);

  return (
    <div>
      <h2>Homepage</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <Link to={`articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
}
