import "./navigation.css"
import {NavLink} from "react-router-dom";

function navigation({className}) {
  return (
    <nav className={`navigation ${className ? className : ''}`}>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}>profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default navigation;