import React from 'react';
import { connect } from 'react-redux';

import { getSession } from "../actions";
import {  CinemaSchedulesContainer } from './';

class SchedulePage extends React.Component {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div className="page-holder">
        <div className="container">
          <h1 className="section-title"><span>Schedule</span></h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  getSession
};

export const SchedulePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);