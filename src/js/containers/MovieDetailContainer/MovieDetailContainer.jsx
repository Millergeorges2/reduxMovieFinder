import React from 'react';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      releaseDate,
      runTime,
      poster,
      genre,
      plot,
      awards,
      metaScore,
      rating
    } = this.props;
    return (
      <div>
        <a  href='/'> <button className='btn btn-info' style={{display: 'block'}}> Go back</button></a>
        <img style={{ marginTop: 80 + 'px' }} src={poster} />
        <div style={{ float: 'right', marginTop: 80 + 'px', width: "70%" }} className="card">
          <div style={{textAlign: 'center'}} className="card-header">
            <strong>Movie Details!</strong>
          </div>
          <div className="card-block">
            <h3 style={{textAlign: 'center'}}> {title} </h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
          <button style={{marginRight: 20 + 'px'}} type="button" className="btn btn-success">{releaseDate}</button>
          <button style={{marginLeft: 0 + 'px'}} type="button" className="btn btn-success">{runTime}</button>
          <button style={{marginLeft: 20 + 'px'}} type="button" className="btn btn-success">{genre}</button>
          </div>
          <p style={{display: 'block', margin: 20 + 'px'}} className="lead"> {plot} </p>
          <p style={{display: 'block', margin: 20 + 'px'}} className="lead"> {awards} </p>
          <p style={{display: 'block', margin: 20 + 'px'}} className="lead"> <strong> Metascore: </strong> {metaScore} </p>
          <p style={{display: 'block', margin: 20 + 'px'}} className="lead"> <strong> IMDB: </strong> {rating} </p>
          </div>
        </div>
      </div>
    )
  }
}
