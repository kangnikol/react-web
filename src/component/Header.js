import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="headRoot">
      <div className="container">
        <div className="row">
          <div className="colHeader col-5">
            <h1 className="headText">
              We Bring Your <span className="stroke">Ideas</span> To{" "}
              <span className="stroke">Life</span>{" "}
            </h1>
            <button type="button" className="btn btn-outline-dark">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
