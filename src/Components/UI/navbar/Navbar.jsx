import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css';

const Navbar = (linkArray) => {
    return (
        <div>
            <div className={cl.navbar}>
                <div style={{marginLeft:'15px'}}>
                    <Link className={cl.navbar__buttons}>Login</Link>
                </div>
                <div className={cl.navbar__links}>
                    <Link style={{marginRight: '4px'}} className={cl.navbar__buttons} to="/about">About</Link>
                    <Link className={cl.navbar__buttons} to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;