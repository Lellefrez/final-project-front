import { NavLink, Routes, Route } from "react-router-dom";

export default () => {
  return (
    <nav>
      <menu>
        <ul>
          <li>
            <NavLink className="link" to="/Characters">
              Personaggi
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Battle">
              Combatti
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/BattlesList">
              Lista Battaglie
            </NavLink>
          </li>
        </ul>
      </menu>
    </nav>
  );
};
