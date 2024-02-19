import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import UmCh from "../assets/Um-Ch.jpeg";
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

  const navigate = useNavigate();

  return (
    <>
      {id === undefined && <Navigate to="/characters" />}
      <div className="singleCharater">
        <div className="character-container">
          <Link to="/characters">
            <button className="CreateCharater">Torna alla lista</button>
          </Link>
          <h1>
            {page.name} {page.surname}
          </h1>
          <figure>
            <img src={`${page.image ?? UmCh}`} alt="Immagine Profilo" />
          </figure>
          <section>
            <p>
              <b>Poteri:</b> {page.powers}
            </p>
            <p>
              <b>Descrizione:</b> <br></br>
              {page.description}
            </p>
            <p>
              <b>Vittorie:</b> {page.victories}
            </p>
            <p>
              <b>Sconfitte:</b> {page.defeats}
            </p>
            <div className="button-page">
              <Link to={`/EditCharacter/${page._id}`}>
                <button className="CreateCharater">Modifica</button>
              </Link>

              <Link>
                <button
                  className="DeleteCharater"
                  onClick={(e) => {
                    axios
                      .delete(`${VITE_BACKEND_URL}/characters/${id}`)
                      .then((res) => {
                        navigate(`/characters`);
                      });
                  }}
                >
                  Elimina
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
