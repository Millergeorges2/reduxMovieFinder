import { connect } from 'react-redux';

import movieSearch from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        movie: store.movie.movie
    }
}

export default connect(mapStoreToProps)(movieSearch);