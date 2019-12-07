import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export const AllMovies = ({ movies }) => {
  const [curentMowies, setCurentMowies] = useState(movies);
  const [curentValue, setCurentValue] = useState('');
  useEffect(() => {
    setCurentValue('');
    setCurentMowies(movies);
  }, [movies]);

  const hendleChangeSearch = (event) => {
    setCurentValue(event.target.value);
    let newMovies = movies.filter((item) => {
      return item.title.toLowerCase().trim().indexOf(event.target.value.toLowerCase().trim()) !== -1
    })
    event.target.value ? setCurentMowies(newMovies) : setCurentMowies(movies);
  };

  return (
    <div className="movies-bock-list">
      <div className="search-block">
        <label htmlFor="search">Поиск:</label>
        <input id="search" type="text" value={curentValue} onChange={hendleChangeSearch} />
      </div>
      <div className="box-list">
        { curentMowies.length 
          ? curentMowies.map((item, i) => (
            <div className="box-item" key={i}>
              <Link to={`/movies/${item._id}`}>
                <div className="img-holder" style={{
                  'backgroundImage': `url(${item.poster})`
                }}>
                </div>
                <h3>{item.title}</h3>
              </Link>
            </div>
          ))
          : <h2 className="not-movie">Извините, фильма выбранным параметрам нет.</h2>
        }
      </div>
    </div>
  );
}