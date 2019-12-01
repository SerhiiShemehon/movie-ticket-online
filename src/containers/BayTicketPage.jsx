import React from 'react';
import { connect } from 'react-redux';




class BayTicketPage extends React.Component {
  componentDidMount() {
    // this.props.match.params.id
  }
  
  render() {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  
};

export const BayTicketPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BayTicketPage);