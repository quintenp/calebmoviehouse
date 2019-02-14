import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav nav-pills">
            <NavLink to="/" exact={true} activeClassName="active" className="nav-link">Home</NavLink >
            <NavLink to="/add" activeClassName="active" className="nav-link">Add</NavLink >
            <NavLink to="/library" activeClassName="active" className="nav-link">Library</NavLink >
        </nav>
    );
};

export default NavBar;