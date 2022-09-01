import React from "react";
import Header from "./commonComponent/Header";
import { Artical, Home, HomeDemo } from "./components";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PracticeAreas from "./components/PracticeAreas";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <PracticeAreas /> */}
            <Artical />
            {/* <Home /> */}
            {/* <HomeDemo /> */}
        </div>
    );
}

export default App;
