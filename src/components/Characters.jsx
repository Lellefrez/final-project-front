import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

export default () => {
  console.log(VITE_BACKEND_URL);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/characters`).then((res) => {
      setCharacters(res.data);
    });
  }, []);
  return (
    <section>
      {characters.map((character) => (
        <div key={character._id} className="character">
          <h3>
            {character.name} {character.surname}
          </h3>
          <p>{character.universe}</p>
        </div>
      ))}
    </section>
  );
};
