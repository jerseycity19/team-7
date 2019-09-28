import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Avatar from 'react-avatar';
import Container from "react-bootstrap/Container"
import NavBar from '../Components/NavBar';
import LoginControl from '../Components/LoginControl'

import './Overview.css';

const Overview = props => {
    return (

    <div>
        <LoginControl/>
        <Container fluid className="headers">
            <div className="ov">Overview</div>
            <div className="up">User Profile</div>
        </Container>

        <Row className="profile-row">
            <Col xl={10}>
                <div className="profile-card">
                <Card>
                    <Card.Body>
                    
                    <div>
                    <Row>

                        <Col><Avatar size={250} round={true}  color="blue" 
                        src="data:image/jpeg;base64,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"/></Col>
 
                 
                        <Col className="name"><div>Andrew Rodrigue</div></Col>

                        <Col className="metric-container">
                            <div className="stats">Statistics</div>
                            <div className="metrics">Total Hours Spent on Chat:</div> <h6>15</h6>
                            <div className="metrics">Total Countries Connected to:</div> <h6>13</h6>
                            </Col>

                    </Row>

                    <Row>
                    <Col></Col>
                    <Col>
                        <div className="about-me">About Me</div>
                        <div className="metrics">Gender:</div> <h6>Male</h6>
                        <div className="metrics">Age:</div> <h6>19</h6>
                        <div className="metrics">Location:</div> <h6>USA</h6>
                        <div className="metrics">Language: </div> <h6>English</h6>
                    </Col>
                    <Col>
                    <Image src="https://freerangestock.com/sample/81449/world-map-with-place-markers--globalization-concept.jpg"/>
                    </Col>
                    </Row>
                    </div>
                    </Card.Body>
                </Card> 
                </div>
            </Col>

        </Row>
 
    </div>
    );
  }
  
  export default Overview;
  