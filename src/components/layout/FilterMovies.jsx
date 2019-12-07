import React, { useState } from 'react';

import { transliterate } from "../../default";

const RadioBlock = (props) => {
  const [radioChecked, setRadioChecked] = useState('')
  const hendleChangeRadio = (event) => {
    setRadioChecked(event.target.value);
    props.hendleParentFilter();
  }
  return (
    <div className="filter-block">
      <h3><span>{props.title}</span></h3>
      <div className="filter-item" key="0">
        <input className="not-filter" type="radio" name={props.name} id={`all-${props.name}`} value={`all-${props.name}`} checked={radioChecked === `all-${props.name}`} onChange={hendleChangeRadio} />
        <label htmlFor={`all-${props.name}`}>все<span></span></label>
      </div>
      {
        props.genreArr.map((item, i) => (
          <div className="filter-item" key={i+1}>
            <input type="radio" name={props.name} id={transliterate(item)} value={item} checked={radioChecked === item} onChange={hendleChangeRadio} />
            <label htmlFor={transliterate(item)}>{item}<span></span></label>
          </div>
        ))
      }
    </div>
  );
}

export const FilterMovies = ({ movies, hendleParentFilter }) => {
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
        <RadioBlock title='Жанр' name='genre' genreArr={genreArr} hendleParentFilter={hendleParentFilter} />
        <RadioBlock title='Страна' name='country' genreArr={countryArr} hendleParentFilter={hendleParentFilter} />
      </div>
  );
}