import React, { Component } from "react";
import * as actions from "./action/index";
import SearchBar from "./searchBar/SearchBar";
import "./home.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
export default class Home extends Component {
  state = {
    albums: [],
  };
  componentDidMount() {
    actions.getAlbums().then((item) =>
      this.setState({
        albums: item,
      })
    );
  }
  searchAlbums = (term) => {
    actions.getAlbums(term).then((item) => this.setState({ albums: item }));
  };
  addToFavorites = (album) => {
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (this.checkAlbum(oldFavorites, album)) {
      let favorites = localStorage.favorites;
      // favorites.splice(album, 1);
      let Favorite = JSON.parse(favorites)
      console.log(Favorite)
      Favorite.splice(album, 1);
      console.log(Favorite)
      localStorage.removeItem("favorites");
      localStorage.setItem("favorites", JSON.stringify(Favorite));

      swal({
        title: "Album Already Exist",
        icon: "warning",
      });
      return false;
    } else {
      oldFavorites.push(album);
      let favorites = oldFavorites;
      localStorage.setItem("favorites", JSON.stringify(favorites));
      swal({
        title: "Album Added",
        text: "Album added to favorites",
        icon: "success",
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
            <div class="music-card">
              <div class="image">
                <img src={item.album.cover_big} />
              </div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>


              <div class="info">
                <h2 class="title">{item.title}</h2>
                <author class="artist">{item.artist.name} </author>
                <div className="links">
                  <Link to={`/details/${item.album.id}`} className="link">
                    <i className="fas fa-info-circle text-dark"></i>
                  </Link>
                  <a
                    onClick={() => this.addToFavorites(item)}
                    href="#"
                    className="link"
                  >
                    <i
                      className="fas fa-grin-stars text-dark"
                      aria-hidden="true"
                    ></i>
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
      <div >
        <div >
          <div className="col-md-10 mx-auto">
            <SearchBar searchAlbums={this.searchAlbums} />
            <div className="row">{this.renderAlbums()}</div>
          </div>
        </div>
      </div>
    );
  }
}