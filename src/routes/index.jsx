import React from 'react';
import { connect } from 'react-redux';

import { getMovies, getRoom, getSession} from "../actions";

import { Header, Footer, Page404 } from "../components";
import { Main } from "./main";

import loading from "../images/loading.gif";

class Page extends React.Component {
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
          <Header />
          <div id="main">
            {
              !isError 
                ? !isLoading 
                  ? <Main />
                  : <div className="loading-holder">
                      <span className="loading"><img src={loading} alt="loading" /></span>
                    </div>
                : <Page404 />
            }
          </div>
        </div>
        <Footer />
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

export const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);