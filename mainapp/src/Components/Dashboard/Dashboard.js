import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import NavBar from '../NavBar';
import { Page } from 'tabler-react';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/cover.jpg';
import './Dashboard.css';
import { Header as THeader } from 'tabler-react';
import img2 from '../../images/services.jpg';
import img3 from '../../images/hangouts.png';

const Dashboard = props => {

    const showTime = () => {
        let place = String.fromCharCode(Math.floor(Math.random()*26+65));

        let hour = Math.floor(Math.random()*12+1);
        let min= Math.floor(Math.random()*60);
        let minutes = min < 10 ? "0"+min : min;

        let day = Math.floor(Math.random()*2) == 1 ? "PM" : "AM";
        ReactDOM.render(place, document.getElementById('place'));
        ReactDOM.render(hour+':'+minutes, document.getElementById('time'));
        ReactDOM.render(day, document.getElementById('day'));
    }

    return (
        <div>
            <Page.Header title="Someone's Shoes" />
            <NavBar />
            <Header />
            <THeader.H3>Current time in <span id='place'>A</span>: <span id='time'>12:30</span><span id='day'>PM</span></THeader.H3>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" onClick={showTime}/>
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