import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export const AllMovies = ({ movies }) => {
  const [currentMowies, setcurrentMowies] = useState(movies);
  const [currentValue, setcurrentValue] = useState('');
  useEffect(() => {
    setcurrentValue('');
    setcurrentMowies(movies);
  }, [movies]);

  const handleChangeSearch = (event) => {
    let newMovies = movies.filter((item) => {
      return item.title.toLowerCase().trim().includes(event.target.value.toLowerCase().trim());
    });
    setcurrentValue(event.target.value);
    event.target.value ? setcurrentMowies(newMovies) : setcurrentMowies(movies);
  };

  return (
    <div className="movies-bock-list">
      <div className="search-block">
        <label htmlFor="search">Поиск по названию:</label>
        <input id="search" type="text" value={currentValue} onChange={handleChangeSearch} />
      </div>
      <div className="box-list">
        { currentMowies.length 
          ? currentMowies.map((item, i) => (
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