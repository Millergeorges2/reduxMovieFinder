import React from 'react';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Movie Search Container</h1>

        <div style={{ marginTop: 20 + 'px' }} className="input-group">
          <input onChange={this.handleWeatherInput} type="text" className="form-control" placeholder="Search for a movie!" aria-describedby="sizing-addon2" />
          <span onClick={this.handleGoButton} style={{ backgroundColor: '#46A2FE', color: 'white' }} className="input-group-addon" id="sizing-addon2">Search!</span>
        </div>
        <div style={{ marginTop: 40 + 'px', position: 'relative' }} className="jumbotron">

          <h2 style={{ textAlign: 'center' }}>The Revenant</h2>
          <p style={{textAlign: 'center'}} className="lead">2016</p>
          <section style={{ display: 'inline-block' }}>
            <img style={{ zIndex: '2', float: 'left'}} src="https://images-na.ssl-images-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
          </section>
          <button style={{position: "absolute", right: 10 + 'px', bottom: 50+ 'px'}}className="btn btn-primary">More Information</button>
        </div>
      </div>
    )
  }
}
