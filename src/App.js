import React from "react";
import Header from "./commonComponent/Header";
import {Home} from "./components";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
