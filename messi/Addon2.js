import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col md={6} className="image-section d-none d-md-block">
          <img
            src="https://img.freepik.com/free-photo/digital-abstract-background-with-particles-wave_23-2149058368.jpg"
            alt="Mentorship"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6} className="form-section p-4">
          <h1>Welcome Back!</h1>
          <p>Login to continue</p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formID">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter ID" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
          <div className="mt-3">
            <span>
              New User? <a href="#">Sign Up</a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
