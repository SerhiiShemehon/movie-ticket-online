import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class ListNews extends React.Component {
  componentDidMount() {
    console.log(this.props.news);
    
  }

  render() {
    return (
      <div className="box-list">
        
      </div>
    );
  };
}

const mapStateToProps = (state) =>  ({
  news: state.newsReducer.news
});

export const ListNewsContainer = connect( mapStateToProps )(ListNews);