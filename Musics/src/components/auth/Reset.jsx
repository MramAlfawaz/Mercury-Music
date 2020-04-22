import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";


class Reset extends Component {
  state = {
    password: "",
  };

  Submit = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:8001/user/reset/${this.props.match.params.token}`,
      {
        password: this.state.password,
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    swal({
      title: "Resetting Password",
      text: "Your password has been changed successfully!",
      icon: "success",
    });

  };

  change = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    console.log(this.state.password);
    return (
      <>
      <div class="pen-title">
  <h1></h1>
  <span class="small"> Mercury Music <i  class="small" class='fa fa-code'></i> by <a href='https://git.generalassemb.ly/Maram-Alfawaz/Mercury-Music'>Mercury Team</a></span>
</div>

<div class="containerSI" >
  
  <div class="card"></div>
  <div class="card">
    <h1 class="title">NEW PADDWORD</h1>

    <form >
      
      <div class="input-container">
        <input type="password"
               name="password"
               onChange={(e) => this.change(e)}
               autofocus="autofocus"
               required id="#{label}" required="required"/>
        <label for="#{label}"> PASSWORD</label>
        <div class="rerun"></div>
        <div class="bar"></div>
      </div>
      
      <div class="button-container">
        <button value="Reset Password"
                onClick={(e) => this.Submit(e)}><span>UPDATE</span></button>
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
export default withRouter(Reset);
