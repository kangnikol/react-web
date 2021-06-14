import React from "react";
import eruda from "eruda";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Portofolio from "./component/Portofolio"

function App() {
  eruda.init();
  return (
    <div>
      <Nav />
      <Header />
      <Portofolio />
    </div>
  );
}

export default App;
