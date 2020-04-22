import React, { Component } from "react";
import FavoritesAlbums from "./FavoritesAlbums";
import "./profile.css";
import maram from './images/ebere.png'
export default class Profile extends Component {

  render() {
    console.log(this.props);
    let user = this.props.user;
  return (
<div>
    <div class="wrapper">
        <div class="cardp">
            <div class="top">
                <i class=""></i>
                <i class="fa fa-home" aria-hidden="true"><a href="/" Style={"color:withe"}></a></i>
            </div>
            <div class="half">
                <div class="profile">
                    <img src={maram} alt="profile-photo"/>
                </div>
                <div class="user-info">
                    <h1 class="h4p">{user.firstName} {user.lastName}</h1>
                    <p  class="pp">{user.city}, {user.country}</p>
                </div>
            </div>
            <div class="bottom">
                <div class="followers">
                    <h5></h5>
                     <p>
                        <small></small>
                     </p>
                </div>
                <div class="following">
                    <h5></h5>
                    <p><small></small></p>
                    
                </div>
                <div class="check-ins">
                    <h5></h5>
                    <p><small></small></p>
                    
                </div>
            </div>
        </div>
        <div class="card-back ">
            
        </div>
        <br/>
        <br/>
        <br/>
    </div>
      <h1 class="h1pf">YOUR FAVORITES</h1>
      <FavoritesAlbums />
      </div>
    
   


/* 
      <div>
        <h2>{user.firstName} {user.lastName}</h2>
        <h3> {user.city}, {user.country} </h3>
        <h1>MY FAVORITES</h1>
        <FavoritesAlbums />
      </div>  */
    );
  }
}
