import axios from "axios";

const fetch_all_movies = async () => {
    const res = await axios.get("http://localhost:3001/getAllMovies").catch((err) => {
        console.log("error  :", err);
    });
    return res;
};
const fetch_new_movies = async () => {
    const res = await axios.get("http://localhost:3001/getNewestMovies").catch((err) => {
        console.log("error : ", err);
    });
    return res;
};

export { fetch_all_movies, fetch_new_movies };
