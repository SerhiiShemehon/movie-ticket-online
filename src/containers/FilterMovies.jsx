import React from 'react';
import { connect } from 'react-redux';

import { transliterate } from "../default";

class RadioBlock extends React.Component {
  state = {
    radioChecked: ''
  };

  hendleChangeRadio = (event) => {
    this.setState({
      radioChecked: event.target.value
    });
  }

  render() {
    return (
      <div className="filter-block">
        <h3><span>{this.props.title}</span></h3>
        {
          this.props.genreArr.map((item, i) => (
            <div className="filter-item" key={i}>
              <input type="radio" name={this.props.name} id={transliterate(item)} value={transliterate(item)} checked={this.state.radioChecked === transliterate(item)} onChange={this.hendleChangeRadio} />
              <label htmlFor={transliterate(item)}>{item}<span></span></label>
            </div>
          ))
        }
      </div>
      
    );
  }
}

const FilterMovies = (props) => {
  const { movies } = props;
  const genreArr = [];
  const countryArr = [];
  movies.forEach( (item) => {
    item.genre.forEach( (elem) => {
      let genre = elem.toLowerCase().trim();
      if (!genreArr.includes(genre) && genre ) {
        genreArr.push(genre);
      } 
    })
    item.country.forEach((elem) => {
      let country = elem.toLowerCase().trim();
      if (!countryArr.includes(country) && country) {
        countryArr.push(country);
      }
    })
  });

  return (
      <div className="filter-sidebar">
        <RadioBlock title='Genre' name='genre' genreArr={genreArr} />
        <RadioBlock title='Country' name='country' genreArr={countryArr} />
      </div>
  );
}


const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = {
  
};

export const FilterMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMovies);