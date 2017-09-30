
import { combineReducers } from 'redux';

import moviesearchreducer from './containers/MovieSearchContainer/MovieSearchReducer';


const rootReducer = combineReducers({
movie: moviesearchreducer,
});

export default rootReducer;
