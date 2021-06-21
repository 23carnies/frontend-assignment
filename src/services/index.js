const baseURL = 'https://api.themoviedb.org/3';
const key = `process.env.REACT_APP_MOVIE_DB_API_KEY`

export function getMovies() {
    // return fetch(`${baseURL}/movie/now_playing?/${key}/`)
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=7315ec59ea2264da1fa4f4eb8d647853`)
    .then(res => res.json())
}