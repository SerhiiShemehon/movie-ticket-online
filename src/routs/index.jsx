import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import { getMovies } from "../actions/movies";

import { Header, Footer } from "../components/layout/";
import { HomePage } from "../components/pages/HomePage";
import { Page404 } from "../components/pages/Page404";
import { MoviesPage } from "../components/pages/MoviesPage";
import { MovieItemPageContainer } from "../components/pages/MovieItemPage";

import loading from "../images/loading.gif";

class Main extends React.Component {
  componentDidMount() {
    this.props.getMovies();
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
                      <Route path="/" component={HomePage} exact></Route>
                      <Route path="/movies/" component={MoviesPage} exact></Route>
                      <Route path="/movies/:id" component={MovieItemPageContainer} exact></Route>
                    </Switch>
                  : <div className="loading-holder">
                      <span className="loading"><img src={loading} alt="loading" /></span>
                    </div>
                : <Page404></Page404>
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
  getMovies
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);