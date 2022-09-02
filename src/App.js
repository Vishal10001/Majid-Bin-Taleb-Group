import React from "react";
import Header from "./commonComponent/Header";
import { Artical, Home, HomeDemo, Login,ContactUs } from "./components";
import Routes from "./Routes";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Routes /> */}
            {/* <PracticeAreas /> */}
            {/* <Artical /> */}
            {/* <Home /> */}
            {/* <HomeDemo /> */}
            <ContactUs />
            {/* <Login /> */}
        </div>
    );
}

export default App;
