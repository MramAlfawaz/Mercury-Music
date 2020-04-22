import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./signin.css";


export const Signin = (props) => {
  const [signin, setSignin] = useState({});

  let onChangeInput = ({ target: { name, value } }) => {
    setSignin({ ...signin, [name]: value });
  };
  useEffect(() => {
    console.log(signin);
  });
console.log(props)
  let onSubmit = (e) => {
    e.preventDefault();
    // Axios.post("http://localhost:8001/user/signin", signin)
    //   .then((res) => {
    //     if (res.data.token) {
    //       localStorage.setItem("token", res.data.token);
          props.userSignin(signin);
          
          // console.log(status);
    //       if (status) {
            props.history.push("/");
    //       }
    //     } else {
    //       console.log("email or password not correct");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  let onChange = (e) => {
    Axios.post("http://localhost:8001/user/forgot")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

<div class="pen-title">
  <h1>WELCOME BACK</h1>
  <span class="small"> Mercury Music <i  class="small" class='fa fa-code'></i> by <a href='https://git.generalassemb.ly/Maram-Alfawaz/Mercury-Music'>Mercury Team</a></span>
</div>

<div class="containerSI" >
  
  
  <div class="card"></div>
  <div class="card">
    <h1 class="title">SIGN IN</h1>

    <form >
      
      <div class="input-container">
        <input    type="email"
                  name="email"
                  onChange={(e) => onChangeInput(e)} id="#{label}" required="required"/>
        <label for="#{label}">EMAIL</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>

      <div class="input-container">
        <input   type="password"
                  name="password"
                  onChange={(e) => onChangeInput(e)} id="#{label}" required="required"/>
        <label for="#{label}">PASSWORD</label>
        <div class="bar"></div>
      </div>
      
      <div class="button-container">
        <button
              type="submit"
              onClick={(e) => onSubmit(e)}><span>SIGN IN</span></button>
      </div>
      <div class="footer"><a
              type="submit"
              onClick={(e) => onChange(e)} href="/forgot">Forgot your password?</a></div>
    </form>
  </div>
  <div class="card alt">
    <div class="toggle" ><i class="music" class="fa fa-music" aria-hidden="true"></i></div>

  </div>
</div>
    </>
  );
};
