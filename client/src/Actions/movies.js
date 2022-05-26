import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./actions";
import Axios from "axios";

const load_movies = () => async (_dispatch) => {
    console.log("here");
    _dispatch({ type: FETCH_REQUEST });
    try {
        const response = await Axios.get("http://localhost:3001/getAllMovies");
        console.log("here2");
        _dispatch({ type: FETCH_SUCCESS, payload: response });
    } catch (error) {
        _dispatch({ type: FETCH_FAIL, error });
    }
};
export default load_movies;
