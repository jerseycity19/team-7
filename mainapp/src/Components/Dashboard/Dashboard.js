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
				<blockquote><p class="quotation"> 
				  	This is such a good platofrm to bring different people together. </p>
					<footer>— Anthony</footer>
				</blockquote> 
				<blockquote><p class="quotation"> 
				  	I could not believe the people I have been able to meet because of this platform </p>
					<footer>— Tracey </footer>
				</blockquote> 
				<blockquote><p class="quotation"> 
				  	I really see myself using this in the future.</p>
					<footer>— Morgan</footer>
				</blockquote> 
				
			</section>
		</div>
	)
}

function Contact(){
	return(
		<div class="Contact">
			<section>
				<h2>Contact Us!</h2>
				<a href="#" > <p> <span class="button"> Facebook </span> </p> </a>
				<a href="#"> <p> <span class="button"> Twitter </span> </p> </a>
			</section>
		</div>
	)
}



export default Dashboard;