import React from 'react';
import { connect } from 'react-redux';

const OptionItem = (props) => {
  return (
    <div className="option-list">
      <span>{props.title}:</span>
      <ul>
        {Array.isArray(props.content) ? props.content.map((item, i) => (<li key={i}>{item}</li>)) : <li>{props.content}</li>}
      </ul>
    </div>
  )
}

const MovieItem = (props) => {
  const { movies, id } = props;
  const movie = movies.find((item) => (item._id === id))

  return (
      movie 
      ? <div className="movie-holder">
          <h1 className="section-title"><span>{movie.title}</span></h1>
          <div className="option-holder">
            <div className="img-holder">
              <img src={movie.poster} alt={movie.title}/>
            </div>
            <div className="text-holder">
              <OptionItem title='Country' content={movie.country}></OptionItem>
              <OptionItem title='Language' content={movie.language}></OptionItem>
              <OptionItem title='Genre' content={movie.genre}></OptionItem>
              <OptionItem title='Actors' content={movie.actors}></OptionItem>
              <OptionItem title='Long' content={movie.long}></OptionItem>
              <OptionItem title='Description' content={movie.description}></OptionItem>
            </div>
          </div>
          <div className="trailer-block">
            <h2 className="section-title"><span>Trailer</span></h2>
            <div className="trailer">
              <iframe src={movie.trailer} title={movie.title}></iframe>
            </div>
          </div>
        </div>
      : <div></div> 
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

export const MovieItemContainer = connect(
  mapStateToProps
)(MovieItem);