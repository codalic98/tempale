import React, { useEffect } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar: React.FC = () => {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const toggleNavbar = () => {
      navbarCollapse?.classList.toggle("show");
    };

    navbarToggler?.addEventListener("click", toggleNavbar);

    return () => {
      navbarToggler?.removeEventListener("click", toggleNavbar);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        EVOPLAY
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" id="red" href="#">
              GAMES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PARTNERSHIPS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              NEWS & EVENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              JACKPOT
            </a>
          </li>
          <li>
            <button>aaa</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
