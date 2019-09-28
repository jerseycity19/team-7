import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Avatar from 'react-avatar';
import Container from "react-bootstrap/Container"
import NavBar from '../Components/NavBar';

import './Overview.css';

const Overview = props => {
    return (

    <div>
        <Container fluid className="header">
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

                        <Col><Avatar size={200} round={true}  color="blue"/></Col>
 
                 
                        <Col className="name"><div>Andrew Rodrigue</div></Col>

                        <Col className="metric-container">
                            <div className="stats">Statistics</div>
                            <div className="metrics">Total Hours Spent on Chat:</div> <h6>15</h6>
                            <div className="metrics">Total Countries Connected to:</div> <h6>5</h6>
                            </Col>

                    </Row>

                    <Row>
                    <Col></Col>
                    <Col>
                        <div className="about-me">About Me</div>
                        <div className="metrics">Gender:</div> <h6>19</h6>
                        <div className="metrics">Location:</div> <h6>USA</h6>
                        <div className="metrics">Language: </div> <h6>English</h6>
                    </Col>
                    <Col></Col>
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
  