import React from "react";
import "./App.css";
import Carouse from "./component/Carouse";
import Categories from "./component/Categories";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import TopBar from "./component/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navigation />
      <Carouse />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
