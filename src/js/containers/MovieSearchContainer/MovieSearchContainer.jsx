import React from 'react';

import { getMovie } from './MovieSearchAction'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieInput = this.handleMovieInput.bind(this);
  }

  handleMovieInput(event){
    const { dispatch } = this.props;
    const { value} = event.target;
    dispatch(getMovie(value));
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Movie Finder</h1>

        <div style={{ marginTop: 20 + 'px', width: "75%", margin: 'auto', marginBottom: 40 + 'px' }} className="input-group">
          <input onChange={this.handleMovieInput} type="text" className="form-control" placeholder="Search for a movie!" aria-describedby="sizing-addon2" />
          <span style={{ backgroundColor: '#46A2FE', color: 'white' }} className="input-group-addon" id="sizing-addon2">Search!</span>
        </div>
        <div style={{ marginTop: 40 + 'px', position: 'relative', width: "75%", margin: 'auto', borderRadius: 10 + 'px' }} className="jumbotron">

          <h2 style={{ textAlign: 'center' }}>The Revenant</h2>
          <p style={{textAlign: 'center'}} className="lead">2016</p>
          <section style={{ display: 'inline-block' }}>
            <img style={{ zIndex: '2', float: 'left', marginLeft: 70 + 'px'}} src="https://images-na.ssl-images-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
          </section>
          <button style={{position: "absolute", right: 30 + 'px', bottom: 50+ 'px'}}className="btn btn-primary">More Information</button>
        </div>
      </div>
    )
  }
}
