import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import cl from './Navbar.module.css';
import MyButton from "../button/MyButton";
import {AuthConext} from "../../../context";

const Navbar = (linkArray) => {
    const {isAuth, setIsAuth} = useContext(AuthConext);
    const router = useHistory();
    return (
        <div>
            <div className={cl.navbar}>
                {isAuth
                ?   <div style={{marginLeft:'15px'}}>
                        <MyButton onClick={(e)=>{
                            e.preventDefault()
                            setIsAuth(false)
                            localStorage.removeItem('auth')
                        }}>Logout</MyButton>
                    </div>
                :   <div style={{marginLeft:'15px'}}>
                        <MyButton onClick={(e)=>{
                            e.preventDefault()
                            router.push('/login')
                        }}>Login</MyButton>
                    </div>
                }
                <div className={cl.navbar__links}>
                    <Link style={{marginRight: '4px'}} className={cl.navbar__buttons} to="/about">About</Link>
                    <Link className={cl.navbar__buttons} to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;