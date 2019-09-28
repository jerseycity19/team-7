import React from 'react';
import { Nav } from "tabler-react";

const NavBar = props => {
    return (
        <Nav>
            <Nav.Item value="Dashboard" icon="globe" to="/" />
            <Nav.Item value="Profile" icon="globe" to="/profile_overview" />
        </Nav>
    )
};

export default NavBar;