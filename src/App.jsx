import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import BattlesList from "./components/BattlesList";
import Battle from "./components/Battle";
import CharactersPage from "./components/CharactersPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters">
          <Route index element={<Characters />} />
          <Route path="charater/:id" element={<CharactersPage />} />
        </Route>
        <Route path="/Battle" element={<Battle />} />
        <Route path="/BattlesList" element={<BattlesList />} />
      </Routes>
    </>
  );
}

export default App;
