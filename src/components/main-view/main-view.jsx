import React from 'react';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'Home Alone', Description: 'Home Alone is a 1990 American comedy film directed by Chris Columbus and written and produced by John Hughes. It is the first film in the Home Alone franchise, and stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O\'Hara. Culkin plays Kevin McCallister, a boy who defends his Chicago home from burglars after his family accidentally leaves him behind on their Christmas vacation to Paris.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', Genre: 'Comedy', Director: 'Chris Columbus'},
                {_id: 2, Title: 'The Fifth Element', Description: 'The Fifth Element is a 1997 English-language French science fiction action film directed by Luc Besson and co-written by Besson and Robert Mark Kamen from a story by Besson. It stars Bruce Willis, Gary Oldman, and Milla Jovovich. Primarily set in the 23rd century, the film\'s central plot involves the survival of planet Earth, which becomes the responsibility of Korben Dallas (Willis), a taxicab driver and former special forces major, after a young woman (Jovovich) falls into his cab. To accomplish this, Dallas joins forces with her to recover four mystical stones essential for the defence of Earth against the impending attack of a malevolent cosmic entity.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX1000_.jpg', Genre: 'Sci-Fi', Director: 'Luc Besson'},
                {_id: 3, Title: 'Mask of Zorro', Description: 'The Mask of Zorro is a 1998 American swashbuckler film based on the character of the masked vigilante Zorro created by Johnston McCulley. It was directed by Martin Campbell and stars Antonio Banderas, Anthony Hopkins, Catherine Zeta-Jones, and Stuart Wilson. The film features the original Zorro, Don Diego de la Vega (Hopkins), escaping from prison to find his long-lost daughter (Zeta-Jones) and avenge the death of his wife at the hands of the corrupt governor Rafael Montero (Wilson). He is aided by his successor (Banderas), who is pursuing his own vendetta against the governor\'s right-hand man while falling in love with de la Vega\'s daughter.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMzg4ZjQ4OGUtZjkxMi00Y2I2LWEzNTAtODI2ZjkxMGVjNTQwXkEyXkFqcGdeQXVyNjgxNTAwNjQ@._V1_.jpg', Genre: 'Action', Director: 'Martin Campbell'}
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;


        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                    ))
                }
            </div>
        );
    }

}