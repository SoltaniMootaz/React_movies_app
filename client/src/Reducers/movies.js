import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "../Actions/actions";
const initialState = {
    data: [],
    loading: false,
    error: null,
};
const load_all_movies = (state = initialState, action = {}) => {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: [],
            };
        default:
            return state;
    }
};
export { load_all_movies };
