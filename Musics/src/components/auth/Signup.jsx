import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import "./up.css";

 

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

<div class="pen-title">
  <h1>WELCOME</h1>
  <span class="small"> Mercury Music <i  class="small" class='fa fa-code'></i> by <a href='https://git.generalassemb.ly/Maram-Alfawaz/Mercury-Music'>Mercury Team</a></span>
</div>

<div class="containerSU" >
  
  
  <div class="card"></div>
  <div class="card">
    <h1 class="title">SIGN UP</h1>

    <form >

    <div class="input-container">
        <input 
        onChange={(e) => onChangeInput(e)}
        name="firstName"
        type="text" id="#{label}" required="required"/>
        <label for="#{label}">FIRST NAME</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>
      
      <div class="input-container">
        <input
        name="lastName"
        onChange={(e) => onChangeInput(e)}
        type="text" id="#{label}" required="required"/>
        <label for="#{label}">LAST NAME</label>
        <div class="rerun"></div>
        <div class="bar"></div> 
      </div>

      <div class="input-container">
        <input
        name="city"
        onChange={(e) => onChangeInput(e)}
        type="text" id="#{label}" required="required"/>
        <label for="#{label}">CITY</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>

      <div class="input-container">
        <input
        name="country"
        onChange={(e) => onChangeInput(e)}
        type="text" id="#{label}" required="required"/>
        <label for="#{label}">COUNTRY</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>

      <div class="input-container">
        <input
        name="faveArtist"
        onChange={(e) => onChangeInput(e)}
        type="text" id="#{label}" required="required"/>
        <label for="#{label}">FAVORITE ARTIST</label>
        <div class="rerun"></div>
        <div class="bar"></div>
        
      </div>

      <div class="input-container">
        <input 
        name="email"
        onChange={(e) => onChangeInput(e)}
        type="email" id="#{label}" required="required"/>
        <label for="#{label}">EMAIL</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>

      <div class="input-container">
        <input 
        type="password"  
        name="password"
        onChange={(e) => onChangeInput(e)}
        id="#{label}" required="required"/>
        <label for="#{label}">PASSWORD</label>
        <div class="bar"></div>
      </div>
      
      <div class="button-container">
        <button onClick={(e) => onSubmit(e)}><span>SIGN UP</span></button>
      </div>
      <div class="footer"> Already have account ? <span></span> 
<a href="/signin" class="k"> SIGN IN</a></div>
    </form>
  </div>
  <div class="card alt">
    <div class="toggle" ><i class="music" class="fa fa-music" aria-hidden="true"></i></div>
 
  </div>
</div>




      {/* <Form className="mt-5">
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
      </Form> */}
    </>
  );
};
