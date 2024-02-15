import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

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
    <section>
      {battles.map((battle) => (
        <div key={battle._id} className="battles">
          <h3>Personaggi:</h3>
          <p>
            {battle?.characters[0]?.name} {battle?.characters[0]?.surname}
          </p>
          <p>
            {battle?.characters[1]?.name} {battle?.characters[1]?.surname}
          </p>
          <h1>
            Vincitore: {battle?.winner?.name} {battle?.winner?.surname}
          </h1>
          <p>ID Battaglia: {battle._id}</p>
        </div>
      ))}
    </section>
  );
};
