import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import UmCh from "../assets/Um-Ch.jpeg";
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
    <div>
      <div className="btn-container">
        <Link to={`/CreateCharacter`}>
          <button className="CreateCharater">Crea il Tuo Personaggio</button>
        </Link>
      </div>
      <section className="card-container">
        {characters.map((character) => (
          <div key={character._id} className="character-card">
            <Link to={`/${character._id}`}>
              <figure>
                <img
                  src={character.image ?? UmCh}
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
    </div>
  );
};
