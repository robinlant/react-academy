import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./Components/UI/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>
        </BrowserRouter>
    );
}

export default App;