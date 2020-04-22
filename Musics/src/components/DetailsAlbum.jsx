import React, { Component } from 'react'
import * as actions from './action/index'


export default class DetailsAlbum extends Component {

    state = {
        album: '',
        tracks: []
    }

    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album =>{
            this.setState({
                album,
                tracks: album.tracks.data
            })
        })
    }

    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((track,index) => (
                <figure key={index}>
                    <figcaption> LISTEN {track.title}</figcaption>
                    <audio
                        controls
                        src={track.preview}>
                            YOUR BROWSER DOESN'T SUPPORT
                            <code>AUDIO</code> ELEMENTS
                    </audio>
                </figure>
            ))
        :
        null;
    }

    renderAlbum = () => {
        const {album} = this.state;
        return  (
            <div className="col md-4 mb-2">
            <div class='music-card'>
              <div class='image'>
                <img src={album.cover_big} />
              </div>
              <div class='wave'></div>
              <div class='wave'></div>
              <div class='wave'></div>
              <div class='info'>
                <h2 class='title'>{album.title}</h2>
                <span className="text-primary">{album.release_date} </span> 
                </div>

            </div>

            <div className="card-footer">
                        {this.renderTracks()}
                    </div> 
            </div>
            
            )
     

    }


    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div class="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            {this.renderAlbum()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
