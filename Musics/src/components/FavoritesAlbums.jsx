import React, { Component } from "react";
import * as actions from "./action/index";
import "./home.css";
import "./cards.css";
import { Link } from "react-router-dom";
import swal from "sweetalert"

export default class FavoritesAlbums extends Component {
  state = {
    albums: [],
  };
  componentDidMount() {
    let favorites = actions.getFavoriteAlbums();
    this.setState({
      albums: JSON.parse(favorites),
    });
  }
  addToFavorites = (album) => {
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (this.checkAlbum(oldFavorites, album)) {
      let favorites = localStorage.favorites;
      let Favorite = JSON.parse(favorites);
      console.log(Favorite);
      Favorite.splice(album, 1);
      console.log(Favorite);
      localStorage.removeItem("favorites");
      localStorage.setItem("favorites", JSON.stringify(Favorite));
//"item.artist.tracklist"
      swal({
        title: "Album Removed",
        icon: "warning",
      });
    }
  };
  checkAlbum = (albums, album) => {
    let found = albums.some(function (item) {
      return item.album.id === album.album.id;
    });
    return found;
  };
  renderAlbums = () => {
    const { albums } = this.state;
    return albums && albums.length
      ? albums.map((item, index) => (
        <div class="row">
        <div class="col-sm-6" >
        <div class='music-card'>
          <div class='image'>
            <img src={item.album.cover_big} />
          </div>
          <div class='wave'></div>
          <div class='wave'></div>
          <div class='wave'></div>
          <div class='info'>
            <h2 class='title'>{item.title}</h2>
            <author class='artist'>{item.artist.name} </author>
            <div className="links">
                           <Link to={`/details/${item.album.id}`} className="link">
                             <i className="fas fa-info-circle text-dark"></i>
                           </Link>
                           <a
                            onClick={() => this.addToFavorites(item)}
                            href="#"
                            className="link"
                          >
                            <i className="fa fa-times text-dark" aria-hidden="true"></i>
        
                          </a>
                        </div>
        
            
          </div>
        </div>
        </div>
        </div>
        ))
      : null;
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div >
          <div className="col-md-10 mx-auto">
            <div className="row">{this.renderAlbums()}</div>
          </div>
        </div>
      </div>
    );
  }
}