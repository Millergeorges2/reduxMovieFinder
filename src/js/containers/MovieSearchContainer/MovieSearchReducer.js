import { types } from './MovieSearchAction';

const initialState = {
    list: [],
    movie: '',
    img: '',
    yearRelease: '',
    title: '',
};

export default function MovieSearchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "GET_MOVIE": 
            return {
                ...state,
                movie: payload.movie
            };
            case "GET_LIST_FULFILLED":
            return{
                list: payload.Search,
            }
        
        default: {
            return state;
        }
    }
}