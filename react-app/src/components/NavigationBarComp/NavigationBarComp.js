import React from "react";

import { NavLink, Route } from "react-router-dom";
import classes from "./NavigationBarComp.module.css";
const NavigationBarComp = () => {
    return (
        <div>
            <header>
                <nav className={classes.main}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/adduser">Add User</NavLink>
                    <NavLink to="/aboutUs">About Us</NavLink>
                </nav>
            </header>
        </div>
    );
};

export default NavigationBarComp;
