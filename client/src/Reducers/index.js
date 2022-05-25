import { combineReducers } from "redux";

import { load_all_movies } from "./movies";
const combinedReducers = combineReducers({
    load_all_movies,
});
export default combinedReducers;
