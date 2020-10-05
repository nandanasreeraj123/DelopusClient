import React from "react";
import "./App.css";
import Oranges from "./Components/part2/orange";
import Levelup from "./Components/part2/level";
import { Router } from "@reach/router";
import Finding from "./Components/Part3/white";
import Abouts from "./Components/Part3/abt";
import Foot from "./Components/footer/footerpath";
import Git from "./Components/part7/getInTouch";
import Tops from "./Components/top/topper";
import RegForm from "./Components/registration/reg";
function App() {
  return (
    <div>
      <Router>
        <Orangepage path="/orange"></Orangepage>
        <Levels path="/level"></Levels>
        <Finds path="/find"></Finds>
        <Abts path="/about"></Abts>
        <Foots path="/footer"></Foots>
        <Gits path="/getintouch"></Gits>
        <Top path="/top"></Top>
        <RF path="/register"></RF>
      </Router>
    </div>
  );
  function Orangepage() {
    return <Oranges></Oranges>;
  }
  function Levels() {
    return <Levelup></Levelup>;
  }
  function Finds() {
    return <Finding></Finding>;
  }
  function Abts() {
    return <Abouts></Abouts>;
  }
  function Foots() {
    return <Foot></Foot>;
  }
  function Gits() {
    return <Git></Git>;
  }
  function Top() {
    return <Tops></Tops>;
  }
  function RF() {
    return <RegForm></RegForm>;
  }
}

export default App;
