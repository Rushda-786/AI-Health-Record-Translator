import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <FaHeartbeat className="me-2" />
          AI Health Record Translator
        </a>

        <div className="ms-auto">
          <button className="btn btn-light">
            Upload Report
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;