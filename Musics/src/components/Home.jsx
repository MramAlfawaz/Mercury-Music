import React, { Component } from "react";
import Header from "./widgets/Header";
import * as actions from "./action/index";
import SearchBar from "./searchBar/SearchBar";
import "./home.css";
import { Link, Switch, Route } from "react-router-dom";
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
      localStorage.getItem("favorites").favorites.splice(album, 1);
      swal({
        title: "Album Exist",
        text: "Album already added to favorites",
        icon: "warning",
      });

      return false;
    }
    oldFavorites.push(album);
    let favorites = oldFavorites;
    localStorage.setItem("favorites", JSON.stringify(favorites));
    swal({
      title: "Album Added",
      text: "Album added to favorites",
      icon: "success",
    });
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
          <div key={index} className="col md-4 mb-2">
            <div className="card border-dark">
              <img src={item.album.cover_big} alt="" className="card-img-top" />
              <div className="card-body">
                <span className="text-primary">{item.artist.name} </span>
                <div className="card-title">{item.title}</div>
              </div>
              <div className="card-footer">
                <div className="links">
                  <Link to={`/details/${item.album.id}`} className="link">
                    <i className="fas fa-info text-dark"></i>
                  </Link>
                  <a
                    onClick={() => this.addToFavorites(item)}
                    href="#"
                    className="link"
                  >
                    <i className="fas fa-star text-dark"></i>
                  </a>
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
      <div className="container">
        <div class="row mt-4">
          <div className="col-md-10 mx-auto">
            <SearchBar searchAlbums={this.searchAlbums} />
            <div className="row">{this.renderAlbums()}</div>
          </div>
        </div>
      </div>
    );
  }
}
