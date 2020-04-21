import React, { Component } from "react";
import FavoritesAlbums from "./FavoritesAlbums";

export default class Profile extends Component {
  render() {
    console.log(this.props);
    let user = this.props.user;
    return (
      <div>
        <h2>{user.firstName}</h2>
        <h3> {user.lastName} </h3>
        <FavoritesAlbums />
      </div>
    );
  }
}
// export default Profile;
