import React, { Component } from 'react'
import * as actions from './action/index'
import './home.css'
import {Link} from 'react-router-dom'


export default class FavoritesAlbums extends Component {
    state = {
        albums: [],
    }

    componentDidMount() {
        let favorites = actions.getFavoriteAlbums();
         this.setState({
            albums : JSON.parse(favorites) 
        });

    }
   

    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ? 
        albums.map((item,index) => (
            <div key={index} className="col md-4 mb-2">
                <div className="card border-dark">
                    <img src={item.album.cover_big} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <span className="text-primary">{item.artist.name} </span>
                            <div className="card-title">
                                            {item.title}
                            </div>
                    </div>
                         <div className="card-footer">
                            <div className="links">
                                <Link to={`/details/${item.album.id}`} className="link"><i className="fas fa-info text-dark"></i></Link>
                            </div>
                        </div>
                </div>
            </div>
        )) : null

    }


    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div class="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
