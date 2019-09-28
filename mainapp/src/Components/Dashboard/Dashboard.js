import React, {useEffect} from 'react';
import NavBar from '../NavBar';
import img1 from '../../images/cover.jpg';
import './Dashboard.css';
import img2 from '../../images/services.jpg';
import img3 from '../../images/hangouts.png';

const Dashboard = props => {
    
    useEffect(() => {
        console.log(localStorage.getItem("loggedIn"));
    }, []);
    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <Testimonials />
            <Contact />
        </div>
    )
};

function Header() {
	return(
		<div class="header">
			<section>
				<h1> FOSTERING DIALOGUE & UNDERSTANDING AMONG THE WORLD'S YOUTH </h1>
				<img src={img1}/>
			</section>
		</div>
	)
};

function Services() {
	return(
		<div class="Services">
			<section>
				<h2>Empowering young generations to share their stories!</h2>
				<img src={img2}/>
				<span> <img src={img3}/> </span>
			</section>
		</div>
	)
}

function Testimonials() {
	return( 
		<div class="Testimonials">
			<section>
				<h2>Testimonials</h2>
				<p>"This is the best platform ever to talk to people around the world"</p>
				<p>"I could not believe the people I have been able to meet because of this platform"</p>
				<p>"I really see my self using this in the future"</p>
			</section>
		</div>
	)
}

function Contact(){
	return(
		<div class="Contact">
			<section>
				<h2>Contact Us!</h2>
				<p> <span class="button"> Facebook </span> </p>
				<p> <span class="button"> Twitter </span> </p>
			</section>
		</div>
	)
}



export default Dashboard;