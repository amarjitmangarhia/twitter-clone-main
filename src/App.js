import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import LeftMenu from "./Components/Menu/LeftMenu";
import MainSection from "./Components/MainSection/MainSection";
import RightFeed from "./Components/RightFeed/RightFeed";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftMenu />
        <MainSection />
        <RightFeed />
      </div>
    </div>
  );
};

export default App;
