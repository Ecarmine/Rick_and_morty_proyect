import React from "react";
import logo from "../Assets/pixlr-bg-result.png";

function Header() {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand fs-1 fw-bold">
              Rick
              <img src={logo} alt="..." height="70" />
              Morty
            </a>
            <form className="d-flex" role="search">
              <input
                // defaultValue={search}
                className="form-control me-2"
                type="search"
                placeholder="Buscar.."
                aria-label="Search"
                // onChange={searching}
              />
              <button className="btn btn-outline-info">Buscar</button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
