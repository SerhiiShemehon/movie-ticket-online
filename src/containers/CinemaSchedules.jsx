import React from 'react'
import { connect } from 'react-redux';

const CinemaSchedules = ({ sessionData }) => {
	const arrDate = [];

	sessionData.forEach( (item) => {
		let newArrDate = [...arrDate];
		let date = new Date(item.date);
		let strDate = date.getDate() + '/' + (date.getMonth() + 1);
		let strTime = date.getHours() + '-' + date.getMinutes();

		if( arrDate.length ){
			let isArr = false;
			newArrDate.forEach( (elem, i) => {
				if( elem.date === strDate ){
					isArr = true;
					arrDate[i].time.push(strTime);
				}
			});
			if (!isArr){
				arrDate.push({
					date: strDate,
					time: [strTime]
				})
			}
		} else {
			arrDate.push({
				date: strDate,
				time: [strTime]
			});
		}
	})

	return (
		<div className="sessions-block" id="sessions-block">
			<h2 className="section-title"><span>Cinema Schedule</span></h2>
				<ul className="session-list">
				{arrDate.length 
					? arrDate.map( (item, i) => (
						<li className="session-item" key={i}>
							<div className="session-date">{item.date}:</div>
							<ul className="session-time-list">
								{item.time.map((elem,j)=>(
									<li className="session-time-item btn" key={j}>{elem}</li>
								))}
							</ul>
						</li>
					))
					: <li className="not-session">Sorry, the movie is not shown!</li>}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({
	sessionData: state.sessionReducer.sessionData
});

export const CinemaSchedulesContainer = connect(
  mapStateToProps
)(CinemaSchedules);
