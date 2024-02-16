import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default () => {
  const [page, setPage] = useState({});
  console.log(page);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/characters/${id}`).then((res) => {
      console.log(res.data);
      setPage(res.data);
    });
  }, []);
  return (
    <>
      {id === undefined && <Navigate to="/characters" />}
      <div className="character-container">
        <h1>
          {page.name} {page.surname}
        </h1>
        <figure>
          <img src={`${page.image}`} alt="Immagine Profilo" />
        </figure>
        <section>
          <p>
            <b>Poteri:</b> {page.powers}
          </p>
          <p>
            <b>Vittorie:</b> {page.victories}
          </p>
          <p>
            <b>Sconfitte:</b> {page.defeats}
          </p>
          <p>
            <b>Descrizione:</b> <br></br>
            {page.description}
          </p>
        </section>
      </div>
    </>
  );
};
