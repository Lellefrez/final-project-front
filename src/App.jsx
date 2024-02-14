import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/Characters"
        element={
          <>
            <Navbar />
            <Characters />
          </>
        }
      />
    </Routes>
  );
}

export default App;
