import './movie-view.scss'
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {

    addFavoriteMovie() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
    
        axios.post(`https://calem-test-api.herokuapp.com/users/${username}/movies/${this.props.movie._id}`, {}, {
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST'
        })
            .then(response => {
                alert(`Added to Favorites List`)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} width="300" height="450"/>
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre.Name}</span>
                </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director.Name}</span>
                </div>

                <button onClick={() => { onBackClick(null); }}>Back</button>
                <Button variant="outline-primary" className="btn-outline-primary" value={movie._id} onClick={(e) => this.addFavoriteMovie(e, movie)}>Add to Favorites</Button>
            </div>
        );
    }
}


MovieView.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired
      }),
      Actors: PropTypes.array,
      Featured: PropTypes.bool,
      ImagePath: PropTypes.string.isRequired
      }).isRequired,
      onBackClick: PropTypes.func.isRequired
  };