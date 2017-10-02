const initialState = {
    list: [],
    movie: '',
    id: '',
    title: '',
    releaseDate: '',
    runTime: '',
    poster: '',
    genre: '',
    plot: '',
    awards: '',
    metaScore: '',
    rating: ''
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
            return {
                ...state,
                list: payload.Search,
            };

        case "GET_MORE_INFO_FULFILLED":
                    return {
                        ...state,
                        id: payload.imdbID,
                        title: payload.Title,
                        releaseDate: payload.Released,
                        runTime: payload.Runtime,
                        poster: payload.Poster,
                        genre: payload.Genre,
                        plot: payload.Plot,
                        awards: payload.Awards,
                        metaScore: payload.Metascore,
                        rating: payload.imdbRating
                    };

        default: {
            return state;
        }
    }
}