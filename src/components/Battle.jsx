import React, { useState, useEffect } from "react";
import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export default () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterG1, setSelectedCharacterG1] = useState(null);
  const [selectedCharacterG2, setSelectedCharacterG2] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //Chiamata personaggi
  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/characters`).then((res) => {
      console.log(res.data);
      setCharacters(res.data);
    });
  }, []);
  //prendiamo gli id in quanto la chiamata ha bisogno di quelli per funzionare e non dei nomi
  const handleOnChangeG1 = (e) => {
    const selectedCharacter = characters.find(
      (character) => character._id === e.target.value
    );
    setSelectedCharacterG1(selectedCharacter);
    setWinner(null);
  };

  const handleOnChangeG2 = (e) => {
    const selectedCharacter = characters.find(
      (character) => character._id === e.target.value
    );
    setSelectedCharacterG2(selectedCharacter);
    setWinner(null);
  };
  // Aggiungiamo entrambi gli id dei personaggi alla battaglia
  const handleBattle = async () => {
    if (selectedCharacterG1 && selectedCharacterG2) {
      try {
        const charactersArray = [
          selectedCharacterG1._id,
          selectedCharacterG2._id,
        ];
        //Chiamata battaglie
        await axios
          .post(`${VITE_BACKEND_URL}/Battles`, { characters: charactersArray })
          .then((res) => {
            const winner = characters.find(
              (character) => character._id === res.data.winner
            );
            setWinner(winner);
            console.log("il vincitore è ", winner.name);
            //rimuovere i personaggi selezionati in precedenza negli input
            setSelectedCharacterG1(null);
            setSelectedCharacterG2(null);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("errore");
    }
  };

  return (
    <>
      {isLoading && <span>Caricamento...</span>}
      {error && <span>Errore caricamento : {error}</span>}
      {!isLoading && !error && (
        <div className="create-battle-page">
          <div className="battle-container">
            <section className="G1">
              <h2>G1</h2>
              <select
                onChange={handleOnChangeG1}
                value={selectedCharacterG1 ? selectedCharacterG1._id : ""}
              >
                <option value="" disabled>
                  Seleziona un personaggio
                </option>
                {characters.map((character) => (
                  <option key={character._id} value={character._id}>
                    {character.name} {character.surname}
                  </option>
                ))}
              </select>
              {selectedCharacterG1 && (
                <figure>
                  <img
                    src={selectedCharacterG1.image}
                    alt={selectedCharacterG1.name}
                  />
                </figure>
              )}
            </section>
            <div>
              <button
                onClick={handleBattle}
                disabled={
                  !selectedCharacterG1 ||
                  !selectedCharacterG2 ||
                  selectedCharacterG1 === selectedCharacterG2
                }
                className={
                  selectedCharacterG1 &&
                  selectedCharacterG2 &&
                  selectedCharacterG1 !== selectedCharacterG2
                    ? ""
                    : "disabled"
                }
              >
                Combatti
                {(!selectedCharacterG1 ||
                  !selectedCharacterG2 ||
                  selectedCharacterG1 === selectedCharacterG2) && (
                  <span className="icon">&#10060;</span>
                )}
              </button>
            </div>
            <section className="G2">
              <h2>G2</h2>
              <select
                onChange={handleOnChangeG2}
                value={selectedCharacterG2 ? selectedCharacterG2._id : ""}
              >
                <option value="" disabled>
                  Seleziona un personaggio
                </option>
                {characters.map((character) => (
                  <option key={character._id} value={character._id}>
                    {character.name} {character.surname}
                  </option>
                ))}
              </select>
              {selectedCharacterG2 && (
                <figure>
                  <img
                    src={selectedCharacterG2.image}
                    alt={selectedCharacterG2.name}
                  />
                </figure>
              )}
            </section>
          </div>
          <div className="winner-container">
            {winner && (
              <>
                <h4>
                  IL VINCITORE È: {winner.name} {winner.surname}
                </h4>
                <figure>
                  <img src={winner.image} alt="Immagine Vincitore Battaglia" />
                </figure>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
