import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { MONTH } from "../constants";

const SchedulePage = (props) => {
  const { sessionData, roomData, movies } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  const arrDate = [];
  sessionData.forEach( (item) => {
    let roomItem = roomData.find(room => room._id === item.room);
    let movieItem = movies.find(movie => movie._id === item.movie);
    let newArrDate = [...arrDate];
    let date = new Date(item.date);
    let strDate = date.getDate() + ' ' + MONTH[date.getMonth()];
    let strTime = date.getHours() + '-' + date.getMinutes();

    if( arrDate.length ){
      let isArr = false;
      newArrDate.forEach( (elem, i) => {
        if( elem.date === strDate ){
          isArr = true;
          arrDate[i].option.push({
            time: strTime,
            room: roomItem.name,
            roomId: roomItem._id,
            movie: movieItem,
            costs: item.costs,
            session: item._id,
						date: item.date
          });
        }
      });
      if (!isArr){
        arrDate.push({
          date: strDate,
          option: [{
            time: strTime,
            room: roomItem.name,
            roomId: roomItem._id,
            movie: movieItem,
            costs: item.costs,
            session: item._id,
						date: item.date
          }]
        })
      }
    } else {
      arrDate.push({
        date: strDate,
        option: [{
          time:	strTime,
          room: roomItem.name,
          roomId: roomItem._id,
          movie: movieItem,
          costs: item.costs,
          session: item._id,
					date: item.date
        }]
      });
    }
  });

  const handleClickToSession = (elem) => {
    const sessionsBlock = document.getElementById(elem);
    window.scrollBy({ top: (sessionsBlock.offsetTop - window.pageYOffset - 120), behavior: 'smooth' });
  }

  return (
    <div className="page-holder custom-p">
      <div className="container">
        <h1 className="section-title"><span>Расписание</span></h1>
        <nav className="nav-date">
          {
            arrDate.length && arrDate.map((item, i) => (
              <button key={i} className="btn" onClick={() => handleClickToSession(`schedule-item-${i}`)}>{item.date}</button>
            ))
          }
        </nav>
        <div className="schedule-list">
          {
            arrDate.length && arrDate.map((item, i) => (
              <div id={`schedule-item-${i}`} className="schedule-item" key={i}>
                <h2 className="schedule-date">{item.date}</h2>
                <div className="movie-time-list">
                  {
                    item.option.map((elem, j) => (
                      elem.movie && (<div className="movie-time-item" key={j}>
                        <div className="img-holder" style={{ 'backgroundImage': `url(${elem.movie.poster})` }}></div>
                        <div className="text-holder">
                          <h3>{elem.movie.title}</h3>
                          <h4 className="time">{`время: ${elem.time}`}</h4>
                          <h4 className="costs">{`цена: ${elem.costs}`}</h4>
                          <h4 className="hall">{`${elem.room} зал`}<span className={`room-${elem.room}`}></span></h4>
                          <Link to={`/buy/${elem.roomId}/${elem.movie._id}/${elem.session}/${elem.date}`} className="btn">купить</Link>
                          <Link to={`/movies/${elem.movie._id}`} className="btn">УЗНАТЬ БОЛЬШЕ</Link>
                        </div>
                      </div>)
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  sessionData: state.sessionReducer.sessionData,
  roomData: state.roomReducer.roomData,
  movies: state.moviesReducer.movies
});

export const SchedulePageContainer = connect(
  mapStateToProps
)(SchedulePage);