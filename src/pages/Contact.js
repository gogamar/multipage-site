import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, contact us at...</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius autem in
        expedita! Excepturi, totam reprehenderit cum quasi commodi tempore, eum
        dolorum quidem nobis soluta, exercitationem itaque provident non maxime
        cumque.
      </p>
    </div>
  );
}
