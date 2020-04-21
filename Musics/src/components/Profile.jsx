import React, { Component } from "react";
import FavoritesAlbums from "./FavoritesAlbums";

class Profile extends Component {
  render() {
    let user = this.props.user;
    return (
      <div>
        {/* <img src={user.image}></img> */}
        <h2>{user.firstName, user.lastName}</h2>
        <h3> l</h3>
        <FavoritesAlbums/>

      </div>

    );
  }
}
export default Profile;