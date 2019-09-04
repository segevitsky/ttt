import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <label
          onClick = {props.clicking}
          className="navbar-toggle"
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <i className="fa fa-bars" ></i>
        </label>
        <a href="#" className="logo">
          {" "}
          <input type="checkbox" id="chkToggle"></input>
          <i className="fas fa-compress-arrows-alt"></i> vs
          <i className="fas fa-crosshairs"></i>{" "}
        </a>
        <ul 
        // className={`main-nav ${props.clicking ? 'active' : ''}`} //Check out
        // why this doesnt work! fuck me!
        className='main-nav'
        id="js-menu"
        >
          <li>
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a onClick= {props.clicked} href="#" className="nav-links">
              New Game
            </a>
          </li>

          <li>
            <a href="#" className="nav-links">
              Play-Online
            </a>
          </li>

          <li>
            <a href="#" className="nav-links">
              {" "}
              Records{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


