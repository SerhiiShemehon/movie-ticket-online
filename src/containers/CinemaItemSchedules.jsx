import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { MONTH } from "../constants";

const TimeList = ({ roomId, session, date, room, time, costs, id }) => {
  return (
    <li className='session-time-item'>
      <Link to={`/buy/${roomId}/${id}/${session}/${date}`} className={`btn btn-${room}`}>{time}</Link>
      <span>{`Цена: ${costs}`}</span>
    </li>
  );
};

const DateList = ({ date, option, id}) => {
  return (
    <li className="session-item">
      <div className="session-date">{date}:</div>
      <ul className="session-time-list">
        {option.map((elem, j) => (
          <TimeList 
            key={j}
            roomId={elem.roomId} 
            session={elem.session} 
            date={elem.date} 
            room={elem.room} 
            time={elem.time} 
            costs={elem.costs} 
            id={id}
          />
        ))}
      </ul>
    </li>
  );
};

const CinemaSchedules = ({ sessionData, roomData, id }) => {
  const currentSessionData = sessionData.filter((item) => item.movie === id)
  const arrDate = [];
  
  currentSessionData.forEach( (item) => {
    let roomItem = roomData.find(room => room._id === item.room);
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
          costs: item.costs,
          session: item._id,
          date: item.date
        }]
      });
    }
  });

  return (
    <div className="sessions-block" id="sessions-block">
      <h2 className="section-title"><span>Расписание</span></h2>
      <div className="d-flex">
        <h6 className="section-subtitle">Выберите день и время</h6>
        <ul className="rooms-color">
          {roomData.map((item,i) => (
            <li key={i}>
              <span className={`room-${item.name}`} />
              {`${item.name} зал`}
            </li>
          ))}
        </ul>
      </div>
      <ul className="session-list">
        {arrDate.length 
          ? arrDate.map( (item, i) => (
            <DateList 
              key={i} 
              date={item.date} 
              option={item.option} 
              id={id} 
            />
          ))
          : <li className="not-session">Извините, но на данный фильм нет сеансов!</li>}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sessionData: state.sessionReducer.sessionData,
  roomData: state.roomReducer.roomData
});

export const CinemaSchedulesContainer = connect(
  mapStateToProps
)(CinemaSchedules);
