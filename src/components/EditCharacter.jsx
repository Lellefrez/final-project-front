import { useEffect } from "react";
const { VITE_BACKEND_URL } = import.meta.env;
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const { id } = useParams();

  const [charactersForm, setCharactersForm] = useState({
    image: "",
    name: "",
    surname: "",
    universe: "",
    powers: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${VITE_BACKEND_URL}/characters/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharactersForm(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const changeData = (key, value) => {
    setCharactersForm((character) => {
      return {
        ...character,
        [key]: value,
      };
    });
  };

  const save = (e) => {
    e.preventDefault();
    setIsSaving(true);

    axios
      .put(`${VITE_BACKEND_URL}/characters/${id}`, charactersForm)
      .then((res) => {
        setCharactersForm(res.data);
        setMessage("Personaggio aggiornato con successo");
      })
      .catch((err) => setError(err))
      .finally(() => setIsSaving(false));
  };

  return (
    <>
      {isLoading && <span>Caricamento...</span>}
      {error && <span>Errore caricamento : {error}</span>}
      {!isLoading && !error && (
        <div className="edit-character-page">
          <form onSubmit={(e) => save(e)}>
            <Link to="/characters" className="button-return-list">
              <button className="CreateCharater">Torna alla lista</button>
            </Link>
            <h2>MODIFICA IL PERSONAGGIO</h2>
            <label>
              <h3>Url Immagine</h3>

              <input
                type="url"
                value={charactersForm.image}
                onChange={(e) => changeData("image", e.target.value)}
              />
            </label>
            <label>
              <h3>Nome</h3>
              <input
                type="text"
                value={charactersForm.name}
                onChange={(e) => changeData("name", e.target.value)}
              />
            </label>
            <label>
              <h3>Cognome</h3>
              <input
                type="text"
                value={charactersForm.surname}
                onChange={(e) => changeData("surname", e.target.value)}
              />
            </label>
            <label>
              <h3>Universo</h3>
              <input
                type="text"
                value={charactersForm.universe}
                onChange={(e) => changeData("universe", e.target.value)}
              />
            </label>
            <label>
              <h3>Poteri</h3>
              <input
                type="text"
                value={charactersForm.powers}
                onChange={(e) => changeData("powers", e.target.value)}
              />
            </label>
            <label>
              <h3>Descrizione</h3>
              <input
                type="text"
                value={charactersForm.description}
                onChange={(e) => changeData("description", e.target.value)}
              />
            </label>
            <button type="submit" className="save-button">
              Salva
            </button>
            {message && <span>{message}</span>}
          </form>
        </div>
      )}
    </>
  );
};
