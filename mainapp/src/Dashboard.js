import React, {useEffect} from 'react';
import NavBar from './Components/NavBar';

const Dashboard = props => {
    
    useEffect(() => {
        console.log(localStorage.getItem("loggedIn"));
    }, []);
    return (
        <div>
            <NavBar />
        </div>
    )
};

export default Dashboard;