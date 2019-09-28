import React from 'react';
import { Nav } from "tabler-react";

const NavBar = props => {
    return (
        <div>
            <Nav>
                <Nav.Item value="Dashboard" icon="globe" to="/" />
                <Nav.Item value="Chatroom" to='/chatroom' />
                <Nav.Item value="Trending News" to='/trending' />
            </Nav>
        </div>
    )
};

export default NavBar;