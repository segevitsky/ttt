import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <label
          onClick = {props.openMenu}
          className={"navbar-toggle"}
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <i className="fa fa-bars" ></i>
        </label>
        <button className="logo">
          {" "}
          <input type="checkbox" id="chkToggle"></input>
          <i className="fas fa-compress-arrows-alt"></i> vs
          <i className="fas fa-crosshairs"></i>{" "}
        </button>
        <ul 
        className='main-nav'
        id="js-menu"
        >
          <li>
            <button className="nav-links">
              Home
            </button>
          </li>
          <li>
            <button onClick= {props.clicked} href="#" className="nav-links">
              New Game
            </button>
          </li>

          <li>
            <button className="nav-links">
              Play-Online
            </button>
          </li>

          <li>
            <button className="nav-links">
              {" "}
              Records{" "}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}


