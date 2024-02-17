import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import BattlesList from "./components/BattlesList";
import Battle from "./components/Battle";
import CharactersPage from "./components/CharactersPage";
import EditCharacter from "./components/EditCharacter";
import CreateCharacter from "./components/CreateCharacter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/:id" element={<CharactersPage />} />
        <Route path="/EditCharacter/:id" element={<EditCharacter />} />
        <Route path="/CreateCharacter" element={<CreateCharacter />} />
        <Route path="/Battle" element={<Battle />} />
        <Route path="/BattlesList" element={<BattlesList />} />
      </Routes>
    </>
  );
}

export default App;
