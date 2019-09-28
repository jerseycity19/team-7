import React from 'react';
import { Nav, AccountDropdown } from "tabler-react";

const NavBar = props => {
    return (
        <div>
            <Nav>
                <Nav.Item value="Dashboard" icon="globe" to="/" />
                <Nav.Item value="Chatroom" to='/chatroom' />
                <Nav.Item value="Trending News" to='/trending' />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <Nav.Item />
                <AccountDropdown
                    avatarURL="./demo/faces/female/25.jpg"
                    name="Jane Pearson"
                    description="Administrator"
                    options={[
                        { icon: "profile", value: "Profile", to: "/profile_overview" },
                        "logout",
                    ]}
                />
            </Nav>
        </div>
    )
};

export default NavBar;