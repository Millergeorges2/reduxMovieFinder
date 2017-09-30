import axios from 'axios';


export function getMovie(movie) {
    return{
        type: "GET_MOVIE",
        payload: { movie }
    }

}
export function getList(movie) {
    return{
        type: 'GET_LIST',
        payload: axios.get('http://www.omdbapi.com/?s=' + movie + '&apikey=8730e0e' )
        .then(response => response.data).catch(err => console.log(err))
    }
}