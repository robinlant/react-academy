import React from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h2>Its a login page</h2>
            <form>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;