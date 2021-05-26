import React from "react";
import "./App.css";
import Example from "./component/Example";
import Navigation from "./component/Navigation";
import TopBar from "./component/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navigation />
      <Example />
    </div>
  );
}

export default App;
