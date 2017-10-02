const initialState = {
    list: [],
    movie: '',
    id: ''
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
                        id: payload,
                        
                    };

        default: {
            return state;
        }
    }
}