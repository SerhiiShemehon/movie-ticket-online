import React from 'react'
import { connect } from 'react-redux';

const CinemaSchedules = (props) => {
	const { sessionData } = props;
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
		<div className="sessions-block">
			<h2 className="section-title"><span>Cinema Schedules</span></h2>
				<ul className="">
				{arrDate.length 
					? arrDate.map( (item, i) => (
						<li key={i}>
							<div className="">{item.date}</div>
							<ul className="">
								{item.time.map((elem,j)=>(
									<li key={j}>{elem}</li>
								))}
							</ul>
						</li>
					))
					: <li className="">

						</li>}
			</ul>
		</div>
	);
}


const mapStateToProps = (state) => ({
  isErrorSession: state.sessionReducer.isErrorSession,
	isLoadingSession: state.sessionReducer.isLoadingSession,
	sessionData: state.sessionReducer.sessionData
});

export const CinemaSchedulesContainer = connect(
  mapStateToProps
)(CinemaSchedules);
