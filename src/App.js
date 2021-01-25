import React from "react";
import "./App.css";
import Game from "./component/game/Game";
import Bucks from "../src/assets/images/bucks.png";
import Gsw from "../src/assets/images/gsw.png";
import Lakers from "../src/assets/images/lakers.png";
import Nets from "../src/assets/images/nets.png";

function App() {
  let warriors = {
    name: "Golden State Warriors",
    logoSrc: Gsw,
  };

  let nets = {
    name: "Brooklyn Nets",
    logoSrc: Nets,
  };

  let lakers = {
    name: "Los Angeles Lakers",
    logoSrc: Lakers,
  };

  let bucks = {
    name: "Milwauke Bucks",
    logoSrc: Bucks,
  };
  return (
    <div className="App">
      <Game venue="Chase Center" homeTeam={warriors} visitingTeam={nets} />
      <Game venue="Staples Center" homeTeam={lakers} visitingTeam={bucks} />
    </div>
  );
}

export default App;
