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

    return (
        <main>
            <ul className="list-group list-group-numbered">
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
