import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
        <Card>
          <Card.Img variant="top" src={movie.ImagePath} crossOrigin="anonymous" />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            
            <Link to={`/movies/${movie._id}`}>
              <Button variant="link">Open</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    }
  }

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };