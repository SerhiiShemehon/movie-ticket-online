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
      {
        props.genreArr.map((item, i) => (
          <div className="filter-item" key={i}>
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
        <RadioBlock title='Genre' name='genre' genreArr={genreArr} hendleParentFilter={hendleParentFilter} />
        <RadioBlock title='Country' name='country' genreArr={countryArr} hendleParentFilter={hendleParentFilter} />
      </div>
  );
}