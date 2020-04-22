import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        term: ''
    }

    handleInputSearch = (e) => {
        this.setState({term: e.target.value})
    }

    submitSearch= (e) =>{
        e.preventDefault();
        let {term} = this.state;
        this.props.searchAlbums(term);
    }

    render() {
        
        console.log(this.state);
        return (

            <div className="search mb-2">
                <form onSubmit={(e) => this.submitSearch(e)}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input type="text" 
                                placeholder="Search for your favorite tracks" 
                                className="form-control p-4" 
                                value={this.state.term}
                                onChange={(e)=> this.handleInputSearch(e)} />

                            </div>
                        </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <button type="submit"  className="btn btn-dark">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                    </div>
                </form>
                
            </div>
        )
    }
}
