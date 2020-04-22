import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";



export default class Forgot extends Component {
  state = {
    email: "",
  };
  Submit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:8001/user/forgetPass`, {
      email: this.state.email,
    })
      .then((res) => {
        console.log(res);
        swal({
          title: "EMAIL SENT",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  change = (e) => {
    console.log(this.props.location);
    this.setState({ ...this.state, email: e.target.value });
  };

  render() {
    console.log(this.props.history.location);
    return (
      
      <>
      <div class="pen-title">
  <h1>WELCOME BACK</h1>
  <span class="small"> Mercury Music <i  class="small" class='fa fa-code'></i> by <a href='https://git.generalassemb.ly/Maram-Alfawaz/Mercury-Music'>Mercury Team</a></span>
</div>

<div class="containerSI" >
  
  <div class="card"></div>
  <div class="card">
    <h1 class="title">RESET PASSWORD</h1>

    <form >
      
      <div class="input-container">
        <input type="text"
              name="email"
              required
              autofocus
              onChange={this.change}
               required id="#{label}" required="required"/>
        <label for="#{label}">Enter Your Email</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>
      
      <div class="button-container">
        <button value="Reset Password"
              onClick={(e) => this.Submit(e)}><span> RESET </span></button>
      </div>
      <div class="footer"><a href="/signin">BACK TO SIGN IN PAGE</a></div>
    </form>
  </div>
  <div class="card alt">
    <div class="toggle" ><i class="music" class="fa fa-music" aria-hidden="true"></i></div>

  </div>
</div>
</>
    );
  }
}
