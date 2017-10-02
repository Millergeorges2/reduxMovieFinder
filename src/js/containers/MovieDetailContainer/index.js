import { connect } from 'react-redux';

import moviedetailcontainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    console.log(store)
    return {
        movie: store.movie.movie,
        id: store.movie.id,
        title: store.movie.title,
        releaseDate: store.movie.releaseDate,
        runTime: store.movie.runTime,
        poster: store.movie.poster,
        genre: store.movie.genre,
        plot: store.movie.plot,
        awards: store.movie.awards,
        metaScore: store.movie.metaScore,
        rating: store.movie.rating
    }
}

export default connect(mapStoreToProps)(moviedetailcontainer);