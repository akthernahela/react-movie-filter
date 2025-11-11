import { useState, useEffect } from 'react';

export default function Main() {
    const movies = [
        {
            title: 'Inception',
            genre: 'Fantascienza'
        },
        {
            title: 'Il Padrino',
            genre: 'Thriller'
        },
        {
            title: 'Titanic',
            genre: 'Romantico'
        },
        {
            title: 'Batman',
            genre: 'Azione'
        },
        {
            title: 'Interstellar',
            genre: 'Fantascienza'
        },
        {
            title: 'Pulp Fiction',
            genre: 'Thriller'
        },
    ]

    const [selectedGenre, setselectedGenre] = useState('');
    const [filterMovies, setfilterMovies] = useState(movies);
    useEffect(() => {
        if (selectedGenre === '') {
            setfilterMovies(movies);
        } else {
            const newfilterMovies = movies.filter((movie) => movie.genre === selectedGenre);
            setfilterMovies(newfilterMovies);
        }
    }, [selectedGenre]);

    let onlyGenre = [];

    return (
        <main>
            <label>Scegli per Genere</label>
            <hr />
            <ul className="list-group">
                {
                    movies.map((movie, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{movie.title}</div>
                                Genere: {movie.genre}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
