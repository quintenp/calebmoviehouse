import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink > 
                {" / "}
                <NavLink to="/add" activeClassName="active">Add</NavLink >
                {" / "}
                <NavLink to="/library" activeClassName="active">Library</NavLink >
            </nav>
        );
    }
}

export default NavBar;