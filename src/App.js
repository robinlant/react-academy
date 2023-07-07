import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/UI/navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import {AuthConext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false);
    })
    return (
        <AuthConext.Provider value={{isAuth,setIsAuth,isLoading}}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthConext.Provider>
    );
}

export default App;