import { connect } from 'react-redux';

import moviedetailcontainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    console.log(store)
    return {
        movie: store.movie.movie,
        list: store.movie.list,
        id: store.movie.id
    }
}

export default connect(mapStoreToProps)(moviedetailcontainer);