import { NavLink, Routes, Route } from "react-router-dom";

export default () => {
  return (
    <nav>
      <menu>
        <ul>
          <li>
            <NavLink className="link" to="">
              Personaggi
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="">
              Combatti
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="">
              Lista Battaglie
            </NavLink>
          </li>
        </ul>
      </menu>
    </nav>
  );
};
