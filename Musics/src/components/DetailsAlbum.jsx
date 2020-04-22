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
                <div class="music" key={index}>
		
		<div class="song-2">
			<div class="info">
				<div class="img second"></div>
				<div class="titles">
					<h5><figcaption> LISTEN {track.title}</figcaption></h5>
				</div>
			</div>
			<div class="state">
				<i class="material-icons"><audio
                        controls
                        src={track.preview}>
                            YOUR BROWSER DOESN'T SUPPORT
                            <code>AUDIO</code> ELEMENTS
                    </audio></i>
			</div>
		</div>
        </div>
             
            ))
        :
        null;
    }

    renderAlbum = () => {
        const {album} = this.state;
        return  (
            <div class="player">
        <div class="music-card-d">
          <div class="image-d">
            <img src={album.cover_big} />
          </div>
          <div class="wave-d"></div>
          <div class="wave-d"></div>
          <div class="wave-d"></div>
          <div class="info-d">
            <h2 class="title-d">{album.title}</h2>
            <span className="text-primary-d">{album.release_date} </span>
          </div>
        </div>

        <div class="player-ui">
          <div class="progress">
            <div class="played">
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <div class="btn"></div>

        <div className="card-footer">{this.renderTracks()}</div>
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
