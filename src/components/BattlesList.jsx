import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;
import UmCh from "../assets/Um-Ch.jpeg";

export default () => {
  console.log(VITE_BACKEND_URL);

  const [battles, setBattles] = useState([]);

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/Battles`).then((res) => {
      console.log(res.data);
      setBattles(res.data);
    });
  }, []);
  return (
    <section className="battlelist-container">
      {battles.map((battle) => (
        <div key={battle._id} className="single-list">
          <h3>Personaggi:</h3>
          <div className="character-first">
            <figure>
              <img
                src={battle?.characters[0]?.image ?? UmCh}
                alt="Impossibile Caricare L'immagine"
              />
            </figure>
            <p>
              {battle?.characters[0]?.name} {battle?.characters[0]?.surname}
            </p>
          </div>
          <div className="character-second">
            <figure>
              <img
                src={battle?.characters[1]?.image ?? UmCh}
                alt="Impossibile Caricare L'immagine"
              />
            </figure>
            <p>
              {battle?.characters[1]?.name} {battle?.characters[1]?.surname}
            </p>
          </div>
          <h1>
            Vincitore:
            <figure>
              <img src={battle?.winner?.image ?? UmCh} alt="" />
            </figure>
            {battle?.winner?.name} {battle?.winner?.surname}
          </h1>
        </div>
      ))}
    </section>
  );
};
