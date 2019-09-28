import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'


const LoginPage = props => {
  return (
    <div >
    <Container fluid className="header">
        <div className="ov">User</div>
        <div className="up">Log In / Sign Up</div>
    </Container>

    <Container>
        <Row >
          <Col></Col>
          <Col className="wrapper" xs={12} md={4}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Row>
          
                <Col className="p-1px">
                  <Button className="submit-button" variant="outline-primary" type="submit">
                    Submit
                  </Button>
                </Col>
                <Col className="p-1px">
                  <Button className="login-button" variant="outline-success" type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
      </Row>
    </Container>
    </div>
  );
}


export default LoginPage;