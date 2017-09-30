import { connect } from 'react-redux';

import movieSearch from './MovieSearchContainer';

function mapStoreToProps(store) {
    console.log(store)
    return {
        movie: store.movie.movie,
        list: store.movie.list,
        img: store.movie.img,
        yearRelease: store.movie.yearRelease,
        title: store.movie.title,

    }
}

export default connect(mapStoreToProps)(movieSearch);