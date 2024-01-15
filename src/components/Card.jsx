import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div>
      <Link style={{textDecoration: 'none'}} to={`/cardDetails/${props.movieId}`} >
      <div className="card">
          <img src={props.img}  />
          <div className="movie-info">
             <p> {props.movieName}</p>
             <p> {props.year}</p>
          </div>
      </div>
      </Link>
    </div>
  )
}

export default Card;
