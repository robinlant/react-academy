import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthConext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthConext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true)
    }

    return (
        <div style={{display:'flex',alignItems:"center",flexDirection:"column"}}>
            <h2 style={{color:'teal',margin:'4px 10px'}}>login</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;