// const baseURL = "https://api.themoviedb.org/3";
const key = `${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
const Moment = require("moment");

export function getMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const allMovies = Object.values(data.results);
      const sorted = allMovies.sort(
        (a, b) =>
          new Moment(b.release_date).format("YYYYMMDD") -
          new Moment(a.release_date).format("YYYYMMDD")
      );
      // console.log('from services', sorted)
      return sorted;
    });
}

export function getOneMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
  )
  .then((res) => res.json())
  

}
