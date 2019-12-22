import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { Page404, ModalPlaceList } from "../components";

import { MONTH, URL_SPACE_SHADOW } from "../constants";
import loading from "../images/loading.gif";

const PlaceItem = ({ booked, free, i, j, place, selectPlase }) => {
  return (
    <li 
      className={`place-item ${booked ? 'booked' : ''} ${free ? 'free' : ''}`} 
      key={`${i}-${j}`} 
      onClick={(elem) => selectPlase(i, j, elem)}
    >
      {place}
    </li>
  );
};

const RowItem = ({row, option, i, selectPlase}) => {
  return (
    <li className="row-item">
      <span>{row}</span>
      <ul className="place-list">
        {
          option.map((elem, j) => (
            <PlaceItem 
              booked={elem.booked} 
              free={elem.free} 
              i={i} 
              j={j} 
              elem={elem} 
              place={elem.place} 
              selectPlase={selectPlase}
            />
          ))
        }
      </ul>
      <span>{row}</span>
    </li>
  );
};

const BayTicketPage = ({ roomData, isLoadingRoom, isErrorRoom, movies, match }) => {
  const { movie: movieID, room: roomId, date: dateAll, session } = match.params;

  const movie = movies.find(item => item._id === movieID);
  const room = roomData.find(item => item._id === roomId);
  const date = new Date(dateAll);
  const formatDate = date.getDate() + ' ' + MONTH[date.getMonth()] + ' ' + date.getHours() + '-' + date.getMinutes();

  const [sortSpacesHall, setSortSpacesHall] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [spaceShadowData, setSpaceShadowData] = useState([]);
  const [isErrorSpaceShadow, setIsErrorSpaceShadow] = useState(false);
  const [isLoadingSpaceShadow, setIsLoadingSpaceShadow] = useState(false);

  const [bookedPlace, setBookedPlace] = useState([]);
  const [limit, setLimit] = useState(false);

  const selectPlase = (row, place, elem) => {
    if( !elem.target.classList.contains('booked') ){
      if(elem.target.classList.contains('book')){
        let i = bookedPlace.indexOf(`ряд ${row+1} место ${place+1}`);
        bookedPlace.splice(i, 1);
        setBookedPlace([...bookedPlace]);
        elem.target.classList.toggle('book');
      } else {
        if (bookedPlace.length < 6) {
          setBookedPlace([...bookedPlace, `ряд ${row+1} место ${place+1}`]);
          elem.target.classList.toggle('book');
        } else {
          setLimit(true);
          setTimeout(() => {
            setLimit(false);
          }, 1500);
        }
      }
    };
  };

  const getSpaceShadow = () => {
    const spaceShadowLoading = () => {
      setIsErrorSpaceShadow(false);
      setIsLoadingSpaceShadow(true);
    };
    const spaceShadowData = (payload) => {
      setIsErrorSpaceShadow(false);
      setIsLoadingSpaceShadow(false);
      setSpaceShadowData(payload);
    };
    const spaceShadowError = () => {
      setIsErrorSpaceShadow(true);
      setIsLoadingSpaceShadow(false);
    };
    
    spaceShadowLoading();
    const NEW_URL_SPACE_SHADOW = URL_SPACE_SHADOW + '?session=' + session;
    axios.get(NEW_URL_SPACE_SHADOW)
      .then(({ data }) => {
        spaceShadowData(data.space);
      })
      .catch((error) => {
        spaceShadowError();
      })
  };

  const handleClickBay = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpaceShadow();
  },[]);

  useEffect(() => {
    const spaces = spaceShadowData;
    const spacesHall = [];
    spaces.forEach((item) => {
      let newSpacesHall = [...spacesHall];

      if (spacesHall.length) {
        let isArr = false;
        newSpacesHall.forEach((elem, i) => {
          if (elem.row === item.row) {
            isArr = true;
            spacesHall[i].option.push({
              place: item.place,
              booked: item.booked,
              free: item.free
            });
          }
        });
        if (!isArr) {
          spacesHall.push({
            row: item.row,
            option: [{
              place: item.place,
              booked: item.booked,
              free: item.free
            }]
          });
        }
      } else {
        spacesHall.push({
          row: item.row,
          option: [{
            place: item.place,
            booked: item.booked,
            free: item.free
          }]
        });
      }
    });

    spacesHall.sort((a, b) => {
      if (a.row > b.row) {
        return 1;
      } else if (a.row < b.row) {
        return -1;
      } else {
        return 0;
      }
    });

    spacesHall.forEach((item) => {
      item.option.sort((a, b) => {
        if (a.place > b.place) {
          return 1;
        } else if (a.place < b.place) {
          return -1;
        } else {
          return 0;
        }
      })
    });

    setSortSpacesHall(spacesHall);
  }, [spaceShadowData]);

  const isNoHaveError = !isErrorRoom || !isErrorSpaceShadow;
  const isLoadingDone = !isLoadingRoom || !isLoadingSpaceShadow;
  const haveData = isLoadingDone && movie && room && sortSpacesHall.length;
  
  return (
    isNoHaveError
      ? haveData
        ? <div className="page-holder">
            <div className="container">
              <h1 className="section-title d-center">{movie.title}</h1>
              <div className="room-nav">
                <h5>{formatDate}</h5>
                <button className="btn" onClick={handleClickBay}>забронировать</button>
              </div>
              <div className={`room-${room.name} room-holder`}>
                {limit && <span className="limit">максимум 6 мест</span>}
                <ul className="row-list">
                  {
                    sortSpacesHall.map((item,i) => (
                      <RowItem 
                        key={i} 
                        row={item.row} 
                        option={item.option} 
                        i={i} 
                        selectPlase={selectPlase} 
                      />
                    ))
                  }
                </ul>
              </div>
              {showModal && <ModalPlaceList bookedPlace={bookedPlace} handleClickBay={handleClickBay}/>}
            </div>
          </div>
        : <div className="loading-holder">
            <span className="loading"><img src={loading} alt="loading" /></span>
          </div>
      : <Page404 /> 
  )
};

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  roomData: state.roomReducer.roomData,
  isLoadingRoom: state.roomReducer.isLoadingRoom,
  isErrorRoom: state.roomReducer.isErrorRoom,
});

export const BayTicketPageContainer = connect(
  mapStateToProps
)(BayTicketPage);