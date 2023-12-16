import React from "react";

import Companies from "./components/Companies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import GetSrarted from "./components/GetStarted";

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
      <Value />
      <Contact />
      <GetSrarted />
    </div>
  );
}

export default App;
