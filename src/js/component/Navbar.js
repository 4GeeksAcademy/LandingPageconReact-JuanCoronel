import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div className="container">
        <a className="navbar-brand text-white ps-3" href="#">Start bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            <a className="nav-link text-secondary" href="#">About</a>
            <a className="nav-link text-secondary" href="#">Services</a>
            <a className="nav-link disabled text-secondary" aria-disabled="true" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;