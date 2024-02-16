import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default () => {
  console.log(VITE_BACKEND_URL);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/characters`).then((res) => {
      console.log(res.data);
      setCharacters(res.data);
    });
  }, []);
  return (
    <section className="card-container">
      {characters.map((character) => (
        <div key={character._id} className="character-card">
          <Link to={`charater/${character._id}`}>
            <figure>
              <img
                src={character.image}
                alt="Impossibile Caricare L'immagine"
              />
            </figure>
          </Link>
          <h3>
            {character.name} {character.surname}
          </h3>
          <p>{character.universe}</p>
        </div>
      ))}
    </section>
  );
};
