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
    movies.forEach(movie => {
        const theGenre = movie.genre;
        if (!onlyGenre.includes(theGenre)) {
            onlyGenre.push(theGenre);
        }
    });
    const handleChange = (event) => { setselectedGenre(event.target.value); }

    return (
        <main>
            <label>Scegli per Genere</label>
            <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
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
