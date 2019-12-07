import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { MONTH } from "../constants";

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
						<li key={i}><span className={`room-${item.name}`}></span>{`${item.name} зал`}</li>
					))}
				</ul>
			</div>
			<ul className="session-list">
				{arrDate.length 
					? arrDate.map( (item, i) => (
						<li className="session-item" key={i}>
							<div className="session-date">{item.date}:</div>
							<ul className="session-time-list">
								{item.option.map((elem,j)=>(
									<li className='session-time-item' key={j}>
										<Link to={`/buy/${elem.roomId}/${id}/${elem.session}/${elem.date}`} className={`btn btn-${elem.room}`}>{elem.time}</Link>
										<span>{`Costs: ${elem.costs}`}</span>
									</li>
								))}
							</ul>
						</li>
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
