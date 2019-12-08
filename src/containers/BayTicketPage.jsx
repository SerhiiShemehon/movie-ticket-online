import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { Page404, ModalPlaceList } from "../components";

import { MONTH, URL_SPACE_SHADOW } from "../constants";
import loading from "../images/loading.gif";

const BayTicketPage = (props) => {
  const { roomData, isLoadingRoom, isErrorRoom, movies} = props;

  const movie = movies.find(item => item._id === props.match.params.movie);
  const room = roomData.find(item => item._id === props.match.params.room);
  const date = new Date(props.match.params.date);
  const formatDate = date.getDate() + ' ' + MONTH[date.getMonth()] + ' ' + date.getHours() + '-' + date.getMinutes();

  const [sortNpacesHall, setSortNpacesHall] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [spaceShadowData, setSpaceShadowData] = useState([]);
  const [isErrorSpaceShadow, setIsErrorSpaceShadow] = useState(false);
  const [isLoadingSpaceShadow, setIsLoadingSpaceShadow] = useState(false);

  const [bookPlace, setBookPlace] = useState([]);
  const [limit, setLimit] = useState(false);

  const selectPlase = (row, place, elem) => {
    if( !elem.target.classList.contains('booked') ){
      if(elem.target.classList.contains('book')){
        let i = bookPlace.indexOf(`ряд ${row+1} место ${place+1}`);
        bookPlace.splice(i, 1);
        setBookPlace([...bookPlace]);
        elem.target.classList.toggle('book');
      } else {
        if (bookPlace.length < 6) {
          setBookPlace([...bookPlace, `ряд ${row+1} место ${place+1}`]);
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
    const NEW_URL_SPACE_SHADOW = URL_SPACE_SHADOW + '?session=' + props.match.params.session;
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
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpaceShadow();
  },[]);

  useEffect(() => {
    const spaces = spaceShadowData;
    const spacesHall = [];
    spaces.forEach((item) => {
      let newspacesHall = [...spacesHall];

      if (spacesHall.length) {
        let isArr = false;
        newspacesHall.forEach((elem, i) => {
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
    })

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

    setSortNpacesHall(spacesHall);
  }, [spaceShadowData]);
  
  return (
    (!isErrorRoom || !isErrorSpaceShadow)
      ? ((!isLoadingRoom || !isLoadingSpaceShadow) && movie && room && sortNpacesHall.length )
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
                    sortNpacesHall.map((item,i) => (
                      <li className="row-item" key={i}>
                        <span>{item.row}</span>
                        <ul className="place-list">
                          {
                            item.option.map((elem,j) => (
                              <li className={`place-item ${elem.booked ? 'booked' : ''} ${elem.free ? 'free' : ''}`} key={`${i}-${j}`} onClick={(elem) => selectPlase(i, j, elem)}>{elem.place}</li>
                            ))
                          }
                        </ul>
                        <span>{item.row}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {showModal && <ModalPlaceList bookPlace={bookPlace} handleClickBay={handleClickBay}/>}
            </div>
          </div>
        : <div className="loading-holder">
            <span className="loading"><img src={loading} alt="loading" /></span>
          </div>
      : <Page404 /> 
  )
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  roomData: state.roomReducer.roomData,
  isLoadingRoom: state.roomReducer.isLoadingRoom,
  isErrorRoom: state.roomReducer.isErrorRoom,
});

export const BayTicketPageContainer = connect(
  mapStateToProps
)(BayTicketPage);