import React, { Component } from "react";
import FavoritesAlbums from "./FavoritesAlbums";
export default class Profile extends Component {
  render() {
    console.log(this.props);
    let user = this.props.user;
    return (
      <div>
        <h2>{user.firstName} {user.lastName}</h2>
        <h3> {user.city}, {user.country} </h3>
        <h1>MY FAVORITES</h1>
        <FavoritesAlbums />
      </div>
    );
  }
}
