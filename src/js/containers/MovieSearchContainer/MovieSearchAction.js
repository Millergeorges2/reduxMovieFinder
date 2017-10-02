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

export function getMoreInfo(id) {
    return{
        type: 'GET_MORE_INFO',
        payload: axios.get('http://www.omdbapi.com/?i=' + id + '&apikey=8730e0e' )
        .then(response =>{ 
            response.data
            console.log(response.data)
        }).catch(err => console.log(err))
    }
}