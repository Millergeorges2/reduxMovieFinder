import axios from 'axios';

export function getMovie(movie) {
    return{
        type: 'GET_MOVIE',
        payload: { movie }
    }

}