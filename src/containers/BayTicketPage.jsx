import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { Page404 } from "../components";

import { getSpaceShadow } from "../actions";

const BayTicketPage = (props) => {
  const { roomData, spaceShadowData, isLoadingRoom, isErrorRoom, isLoadingSpaceShadow, isErrorSpaceShadow, movies} = props;

  const movie = movies.find(item => item._id === props.match.params.movie);
  const room = roomData.find(item => item._id === props.match.params.room);

  const [sortNpacesHall, setSortNpacesHall] = useState([]);
  console.log(sortNpacesHall);
  

  useEffect(() => {
    props.getSpaceShadow(props.match.params.session);
  },[]);

  useEffect(() => {
    const spaces = props.spaceShadowData;
    const spacesHall = [];
    spaces.forEach((item) => {
      let newspacesHall = [...spacesHall];
      console.log(item);

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
    <div>
      {
        (!isErrorRoom || !isErrorSpaceShadow)
          ? ((!isLoadingRoom || !isLoadingSpaceShadow) && movie && room && sortNpacesHall.length )
            ? <div className="page-holder">
                <div className="container">
                  <h1 className="section-title d-center">{movie.title}</h1>
                  <div className={`room-${room.name} room-holder`}>
                    <ul className="row-list">
                      {
                        sortNpacesHall.map((item,i) => (
                          <li className="row-item" key={i}>
                            <span>{item.row}</span>
                            <ul className="place-list">
                              {
                                item.option.map((elem,j) => (
                                  <li className={`place-item ${elem.booked && 'booked'} ${elem.free && 'free'}`} key={`${i}-${j}`}>{elem.place}</li>
                                ))
                              }
                            </ul>
                            <span>{item.row}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            : <div className="">

            </div>
          : <Page404 /> 
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  roomData: state.roomReducer.roomData,
  isLoadingRoom: state.roomReducer.isLoadingRoom,
  isErrorRoom: state.roomReducer.isErrorRoom,
  // spaceData: state.spaceReducer.spaceData,
  // isLoadingSpace: state.spaceReducer.isLoadingSpace,
  // isErrorSpace: state.spaceReducer.isErrorSpace,
  spaceShadowData: state.spaceShadowReducer.spaceShadowData,
  isLoadingSpaceShadow: state.spaceShadowReducer.isLoadingSpaceShadow,
  isErrorSpaceShadow: state.spaceShadowReducer.isErrorSpaceShadow
});

const mapDispatchToProps = {
  getSpaceShadow
};

export const BayTicketPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BayTicketPage);