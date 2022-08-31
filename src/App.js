import React from "react";
import Header from "./commonComponent/Header";
import { Artical, Home, HomeDemo } from "./components";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Artical />
            {/* <Home /> */}
            {/* <HomeDemo /> */}
        </div>
    );
}

export default App;
