import { connect } from 'react-redux';

import movieSearch from './MovieSearchContainer';

function mapStoreToProps(store) {
    console.log(store)
    return {
        movie: store.movie.movie,
        list: store.movie.list,
        id: store.movie.id
    }
}

export default connect(mapStoreToProps)(movieSearch);