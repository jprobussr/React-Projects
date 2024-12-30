import React from 'react';
import './MovieCard.css';
import Star from '../../assets/star.png';

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img src="https://www.joblo.com/wp-content/uploads/2024/07/1992-poster-400x600.jpg" alt="Movie Poster" className="movie_poster" />

      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
            <p>10-20-2020</p>
            <p>9.0 <img src={Star} alt="rating-icon" className='card_emoji' /></p>
        </div>

        <p className='movie_description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi impedit voluptates delectus eum, ipsam non!
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
