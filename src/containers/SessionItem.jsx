import React from 'react';
import { connect } from 'react-redux';

import { getSessionItem } from "../actions/sessionItem";

import loading from "../images/loading.gif";


class SessionItem extends React.Component {
  state = {
    arrayDate: [],
    arrayTime: []
  }

  componentDidMount() {
    this.props.getSessionItem(this.props.id);
  }

  render() {
    const { isLoading, session, isError } = this.props;
    console.log(this.props.session)
    return (
      !isError
        ? !isLoading && session
          ? <div className="session-holder">
              <h2 className="section-title"><span>Расписания</span></h2>

            </div>
          : <div className="loading-holder">
            <span className="loading"><img src={loading} alt="loading" /></span>
          </div>
        : <div>Извините, произошла ошибка</div>
    );
  };
}

const mapStateToProps = (state) => ({
  isError: state.sessionItemReducer.isError,
  isLoading: state.sessionItemReducer.isLoading,
  session: state.sessionItemReducer.session
});

const mapDispatchToProps = {
  getSessionItem
};

export const SessionItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionItem);