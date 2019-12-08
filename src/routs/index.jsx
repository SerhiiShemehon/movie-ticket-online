import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { getMovies, getRoom, getSession} from "../actions";

import { Header, Footer, HomePage, Page404, NewsPage, MovieItemPage, AdminPage } from "../components";
import { MoviesPageContainer, SchedulePageContainer, BayTicketPageContainer } from "../containers";

import loading from "../images/loading.gif";

export const history = createBrowserHistory();

class Main extends React.Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getRoom();
    this.props.getSession();
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
                      <Route path="/movies/:id" component={MovieItemPage} exact />
                      <Route path="/buy/:room/:movie/:session/:date" component={BayTicketPageContainer} exact />
                      <Route path="/admin" component={AdminPage} exact />
                      <Route path="*" component={Page404} />
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
  getRoom,
  getSession
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);