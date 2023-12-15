import React from "react";

import Companies from "./components/Companies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
