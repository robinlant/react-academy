import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css';

const Navbar = (linkArray) => {
    return (
        <div>
            <div className={cl.navbar}>
                <div className={cl.navbar__links}>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;