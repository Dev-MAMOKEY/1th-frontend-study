import styles from "./MovieCard.module.css"

const MovieCard = ({ movie }) => {
    //이미지 URL 경로 설정
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className={styles.movieCard}>
            <img src={imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>평점: {movie.vote_average}</p>
        </div>
    )
}

export default MovieCard
