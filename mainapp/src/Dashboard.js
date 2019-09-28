import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "tabler-react";

const Dashboard = props => {
    return (
        <Nav>
            <Nav.Item value="Dashboard" icon="globe" to="/"></Nav.Item>
            <Nav.Item value="Chatroom" icon="globe" to="/chatroom"></Nav.Item>
        </Nav>
    )
};

export default Dashboard;