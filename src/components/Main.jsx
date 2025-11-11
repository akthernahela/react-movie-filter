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
            <div>
                <label>Scegli per Genere</label>
                <select class="form-select form-select-sm" aria-label="Genre select menu" value={selectedGenre} onChange={handleChange}>
                    <option selected>Tutti i Generi</option>
                    {
                        onlyGenre.map((genre, index) => (<option key={index} value={genre}>{genre}</option>))
                    }
                </select>
            </div>
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
