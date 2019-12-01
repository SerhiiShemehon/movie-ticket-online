import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import { getMovies, getRoom } from "../actions";

import { Header, Footer } from "../components/layout";
import { HomePage, Page404, NewsPage } from "../components/pages";
import { MoviesPageContainer, MovieItemPageContainer, SchedulePageContainer, BayTicketPageContainer } from "../containers";

import loading from "../images/loading.gif";

class Main extends React.Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getRoom();
  }

  render() {
    const { isLoading, isError } = this.props;
    
    return (
      <div className="layout-holder">
        <div id="wrapper">
          <Header></Header>
          <div id="main">
            {
              !isError 
                ? !isLoading 
                  ? <Switch>
                      <Route path="/" component={HomePage} exact />
                      <Route path="/movies/" component={MoviesPageContainer} exact />
                      <Route path="/schedule/" component={SchedulePageContainer} exact />
                      <Route path="/news/" component={NewsPage} />
                      <Route path="/movies/:id" component={MovieItemPageContainer} exact />
                      <Route path="/buy/:room/:movie/:session" component={BayTicketPageContainer} exact />
                    </Switch>
                  : <div className="loading-holder">
                      <span className="loading"><img src={loading} alt="loading" /></span>
                    </div>
                : <Page404 />
            }
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isError: state.errorReducer.isError,
  isLoading: state.loadingReducer.isLoading
});

const mapDispatchToProps = {
  getMovies,
  getRoom
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);