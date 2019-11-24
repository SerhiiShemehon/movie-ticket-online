import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import loading from "../images/loading.gif";

import { getMovies } from "../actions/movies";

import { randomInteger } from "../default";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class BannerMovies extends React.Component {
  state = {
    bannerMovies: {
      '5c93e673ca38bf00172e49a2': 'https://kino-teatr.ua/public/main/films/trailer_15914.jpg',
      '5c9e0acc755b0c0017ecd0a0': 'https://trashbox.ru/files/1101805_7277a8/c10927931b516d0e.jpg',
      '5cb716f383c65c4714f164d1': 'https://i.ytimg.com/vi/gTn4DAzlNQs/maxresdefault.jpg',
      '5c9e7d0f68ef9e0017ca1958': 'https://kinomax.tomsk.ru/upload/news/rtf/690_img_5c921433d8dd3_dambo.jpg',
      '5cab3cce1e804a3efb928c55': 'https://ua.news/wp-content/uploads/2019/06/7-25.jpg',
      '5cab60d81e804a3efb928c56': 'https://i.ytimg.com/vi/r9jfJnJg7mU/maxresdefault.jpg',
      '5cab63b31e804a3efb928c57': 'https://static.life.ru/posts/2019/04/1207397/gr/north/cd526d547ca9e8f37a146f8578bae14d__1440x.jpg',
      '5cb370f16ce25e31ca3e08e9': 'https://i0.wp.com/itc.ua/wp-content/uploads/2019/05/Pokemon-Detective-Pikachu.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1',
      '5cb375c96ce25e31ca3e08ea': 'https://i.ytimg.com/vi/rOtg26OKd-8/maxresdefault.jpg',
      '5cb7327883c65c4714f17330': 'https://avatars.mds.yandex.net/get-zen_doc/1887445/pub_5cb45ea993828900b32ed843_5cb5b56071b26b00b34539fe/scale_1200',
      '5cb733d883c65c4714f1742f': 'https://avatars.mds.yandex.net/get-zen_doc/125920/pub_5ce6bf60cb1ea900b242aaa7_5ce93ce4d2421400b4587b92/scale_1200',
      '5cb73f5f83c65c4714f18282': 'https://kino-khv.ru/media/cache/image_w_1300/media/images/films/backdrops//8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg',
      '5cb84d716298621d47b961c9': 'https://sm.ign.com/t/ign_ru/screenshot/default/suicide-squad1280jpg-7cef13_w77p.1280.jpg',
      '5cb84e106298621d47b961ca': 'http://i1.ytimg.com/vi/8JuGv5xI52w/maxresdefault.jpg',
      '5cb84efb6298621d47b961cb': 'http://thumbs.dfs.ivi.ru/storage6/contents/2/b/6d4692172b6f6e814022bbaf5ad956.jpg'
    }
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { isLoading, movies, isError } = this.props;

    const currentBanner = randomInteger(0, movies.length - 1);
    const movie = movies.find((item, i) => i === currentBanner);

    return (
      <div className="section-banner">
        {
          !isError 
            ? !isLoading && movie 
              ? <div className="banner-holder" style={{ backgroundImage: `url(${this.state.bannerMovies[movie._id]})`}}>
                  <h1>{movie.title}</h1>
                  <div className="option-list">
                    <h6>Страна:</h6>
                    <ul>
                      {movie.country.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <div className="option-list">
                    <h6>Жанр:</h6>
                    <ul>
                      {movie.genre.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <Link to={`/movies/${movie._id}`} className="btn">Узнать больше</Link>
                </div>
              : <div className="loading-holder">
                  <span className="loading"><img src={loading} alt="loading" /></span>
                </div>
            : history.push('/error/')
        }
      </div>
    );
  };
}

const mapStateToProps = (state) =>  ({
  isError: state.moviesReducer.isError,
  isLoading: state.moviesReducer.isLoading,
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  getMovies
};

export const BannerMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerMovies);