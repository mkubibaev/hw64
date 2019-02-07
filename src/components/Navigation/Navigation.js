import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <ul className="nav">
        <li className="nav-item active">
            <NavLink to="/" exact className="nav-link">ToDo list</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/watchlist" className="nav-link">Watch list</NavLink>
        </li>

    </ul>
);

export default Navigation;