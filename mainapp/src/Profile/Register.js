import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from "react-bootstrap/Jumbotron"
import InputGroup from "react-bootstrap/InputGroup"
import './Register.css'
import { Link } from 'react-router-dom'
import NavBar from "../Components/NavBar";


const Register = props => {
  localStorage.setItem('loggedIn', false);
  

  return (
    <div >
    <NavBar/>
    <Container fluid className="headers">
        <div className="ov">User</div>
        <div className="up">Log In / Sign Up</div>
    </Container>

    <Jumbotron fluid className="jumbotron">

    </Jumbotron>
    <Container>
    
        <Row >
           

          <Col className="wrapper" >

            
            <Form>

            <Row>

                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                </Col>
                    
                <Col>
                <Form.Group controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="password" placeholder="e.g. United States of America" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="formBasicDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="password" placeholder="e.g. 02/14/2000" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Please confirm you are of 16 years or older." />
                    </Form.Group>
                </Col>

                <Col className="image-upload">
                    <div className="drop-image">Drop Files Anywhere to Upload </div>
                    <h5>or</h5>
                    <Button className="" variant="outline-dark" type="submit">Choose files</Button>
                </Col>
            </Row>
              <Row className="register">
                <Col className="">
                  <Button className="submit-button" variant="outline-primary" type="submit">
                  <Link to='/profile_overview'>Register</Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
      
      </Row>
    </Container>
    </div>
  )
};


export default Register;