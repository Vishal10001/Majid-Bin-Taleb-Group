import React from "react";
import Header from "./commonComponent/Header";
import Routes from "./Routes";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes />
        </div>
    );
}

export default App;
