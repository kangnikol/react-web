import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="headRoot">
      <div className="container">
        <div className="row">
          <div className="colHeader">
            <h1 className="headText">We Bring <br />
            Your Ideas <br />
            To Life <br /></h1>
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
