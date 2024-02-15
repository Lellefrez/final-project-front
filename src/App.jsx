import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import BattlesList from "./components/BattlesList";
import Battle from "./components/Battle";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" index element={<Characters />} />
        <Route path=":id" element={<Characters />} />
        <Route path="/Battle" element={<Battle />} />
        <Route path="/BattlesList" element={<BattlesList />} />
      </Routes>
    </>
  );
}

export default App;
