import React, {useState, useEffect} from 'react';
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
};

const MovieItem = (props) => {
  const { movies, id } = props;
  const [movie, setMovie] = useState(false);

  useEffect(() => {
    setMovie(movies.find((item) => (item._id === id)))
  });

  const handleClickToSession = () => {
    const sessionsBlock = document.getElementById('sessions-block');
    window.scrollBy({ top: (sessionsBlock.offsetTop - 100), behavior: 'smooth' });
  };

  return (
    movie && <div className="movie-holder">
      <h1 className="section-title">
        {movie.title}
        <button className='btn btn-green' onClick={handleClickToSession}>купить билет</button>
      </h1>
      <div className="option-holder">
        <div className="img-holder">
          <img src={movie.poster} alt={movie.title}/>
        </div>
        <div className="text-holder">
          <OptionItem title='Страна' content={movie.country} />
          <OptionItem title='Язык' content={movie.language} />
          <OptionItem title='Жанр' content={movie.genre} />
          <OptionItem title='Актеры' content={movie.actors} />
          <OptionItem title='Длительность' content={movie.long} />
          <OptionItem title='Описание' content={movie.description} />
        </div>
      </div>
      <div className="trailer-block">
        <h2 className="section-title"><span>Трейлер</span></h2>
        <div className="trailer">
          <iframe src={movie.trailer} title={movie.title}></iframe>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

export const MovieItemContainer = connect(
  mapStateToProps
)(MovieItem);