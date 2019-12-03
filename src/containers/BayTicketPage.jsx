import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { Page404 } from "../components";

const BayTicketPage = (props) => {
  const {roomData, spaceData, isLoadingRoom, isErrorRoom, isLoadingSpace, isErrorSpace, movies} = props;

  const movie = movies.find(item => item._id === props.match.params.movie);
  const room = roomData.find(item => item._id === props.match.params.room);
  const spaces = spaceData.filter(item => item.room === props.match.params.room);

  const [sortNpacesHall, setSortNpacesHall] = useState([]);

  useEffect(() => {
    const spacesHall = [];
    spaces.forEach( (item) => {
      let newspacesHall = [...spacesHall];

      if( spacesHall.length ){
        let isArr = false;
        newspacesHall.forEach( (elem, i) => {
          if( elem.row === item.row ){
            isArr = true;
            spacesHall[i].places.push(item.place);
          }
        });
        if (!isArr){
          spacesHall.push({
            row: item.row,
            places: [item.place]
          });
        }
      } else {
        spacesHall.push({
          row: item.row,
          places: [item.place]
        });
      }
    });

    spacesHall.sort((a,b) => {
      if (a.row > b.row){
        return 1;
      } else if (a.row < b.row){
        return -1;
      } else {
        return 0;
      }
    })
    
    spacesHall.forEach((item) => {
      item.places.sort((a,b) => {
        if (a > b){
          return 1;
        } else if (a < b){
          return -1;
        } else {
          return 0;
        }
      })
    });
    
    setSortNpacesHall(spacesHall);
  },[])
  
  return (
    <div>
      {
        (!isErrorRoom || !isErrorSpace)
          ? ((!isLoadingRoom || !isLoadingSpace) && movie && room && sortNpacesHall.length )
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
                                item.places.map((elem,j) => (
                                  <li className="place-item" key={`${i}-${j}`}>{elem}</li>
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
  spaceData: state.spaceReducer.spaceData,
  isLoadingSpace: state.spaceReducer.isLoadingSpace,
  isErrorSpace: state.spaceReducer.isErrorSpace
});

const mapDispatchToProps = {
  
};

export const BayTicketPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BayTicketPage);