import { useEffect } from "react";
const { VITE_BACKEND_URL } = import.meta.env;
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

  const changeData = (key, value) => {
    setCharactersForm((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  const save = (e) => {
    e.preventDefault();
    setIsSaving(true);

    axios
      .post(`${VITE_BACKEND_URL}/Characters`, charactersForm)
      .then((res) => {
        if (res.data && typeof res.data === "object") {
          setCharactersForm(res.data);
          setMessage("Personaggio creato con successo");
          navigate(`/characters`);
        } else {
          setError("Errore durante la creazione del personaggio");
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsSaving(false));
  };

  const navigate = useNavigate();

  return (
    <>
      {isLoading && <span>Caricamento...</span>}
      {error && <span>Errore caricamento : {error}</span>}
      {!isLoading && !error && (
        <div className="create-character-page">
          <form onSubmit={(e) => save(e)}>
            <Link to="/characters" className="button-return-list">
              <button className="CreateCharater">Torna alla lista</button>
            </Link>
            <h2>CREA IL TUO PERSONAGGIO</h2>
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
