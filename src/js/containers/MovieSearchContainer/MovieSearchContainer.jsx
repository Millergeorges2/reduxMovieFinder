import React from 'react';

import { getMovie } from './MovieSearchAction'

import { getList } from './MovieSearchAction'

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { lis } = this.props;
    return (
      <div style={{ marginTop: 40 + 'px', position: 'relative', width: "75%", margin: 'auto', borderRadius: 10 + 'px', marginBottom: 20 + 'px' }} className="jumbotron">
        <h2 style={{ textAlign: 'center' }}>{lis.Title}</h2>
        <p style={{ textAlign: 'center' }} className="lead">{lis.Year}</p>
        <section style={{ display: 'inline-block' }}>
          <img style={{ zIndex: '2', float: 'left', marginLeft: 70 + 'px' }} src={lis.Poster} alt="" />
        </section>
        <button style={{ position: "absolute", right: 30 + 'px', bottom: 50 + 'px' }} className="btn btn-primary">More Information</button>
      </div>
    )
  }
}

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleMovieSearch(event) {
    const { dispatch, movie } = this.props;
    dispatch(getList(movie));
  }

  handleMovieInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getMovie(value));
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Movie Finder</h1>

        <div style={{ marginTop: 20 + 'px', width: "75%", margin: 'auto', marginBottom: 40 + 'px' }} className="input-group">
          <input onChange={this.handleMovieInput} type="text" className="form-control" placeholder="Search for a movie!" aria-describedby="sizing-addon2" />
          <span onClick={this.handleMovieSearch} style={{ backgroundColor: '#46A2FE', color: 'white' }} className="input-group-addon" id="sizing-addon2">Search!</span>
        </div>
        {list.map((lis, index) => {
          return (
            <SingleMovie 
            key={index} 
              lis= { lis }
            />
        )})}
      </div>
    )
  }
}
export default MovieSearchContainer;