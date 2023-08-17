import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TopLayout } from "./Layout/TopLayout/TopLayout";
import { MidLayout } from "./Layout/MidLayout/MidLayout";
import { BotLayout } from "./Layout/BotLayout/BotLayout";

function App() {
  return (
    <div className="App">
      <TopLayout />
      <MidLayout />
      {/* <BotLayout /> */}
    </div>
  );
}

export default App;
