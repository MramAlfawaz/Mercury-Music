import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import Axios from "axios";

export const Signup = (props) => {
  const [user, setUser] = useState({}); // user info
  const [signup, setSignup] = useState(false); // to show aleart
  //to add the input inside user
  let onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  // to add the user info to database
  let onSubmit = (e) => {
    console.log(user)
    e.preventDefault();
    Axios.post("http://localhost:8001/user/signup", user)
      .then((res) => {
        if (res.data.signup) {
          props.history.push("/signin");
        } else {
          setSignup(true);
          setTimeout(() => {
            setSignup(false);
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {signup && (
        <Alert variant={"danger"}>the email used . plz change the email</Alert>
      )}
      <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={6}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder="First name"
                  name="firstName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  placeholder="Last name"
                  name="lastName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              
            </Form.Row>
            <Form.Row>
              <Col md={6}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => onChangeInput(e)}
                  />
                </Form.Group>
              </Col>

              <Form.Group as={Col} controlId="formGridPassword">
                <Col md={6}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onChangeInput(e)}
                  />
                </Col>
              </Form.Group>
              <Col md={6}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="City"
                  name="city"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder="country"
                  name="country"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Favorite Artist</Form.Label>
                <Form.Control
                  placeholder="Favorite Artist"
                  name="faveArtist"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Col md={10}>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                Sign Up
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </>
  );
};
