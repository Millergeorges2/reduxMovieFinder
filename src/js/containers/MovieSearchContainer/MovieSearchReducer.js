const initialState = {
    movie: ''
};

export default function MovieSearchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case 'GET_MOVIE': 
            return{
                ...state,
                movie: payload.movie
            };
        default: {
            return state;
        }
    }
}