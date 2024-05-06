import Movie  from "./Movie"

export default function MovieList(props) {
    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                <li><Movie data={props.movies[0]} key={props.movies[0].id}/></li>
                <li><Movie data={props.movies[1]} key={props.movies[1].id}/></li>
                <li><Movie data={props.movies[2]} key={props.movies[2].id}/></li>
            </ul>
        </div>
    )
}