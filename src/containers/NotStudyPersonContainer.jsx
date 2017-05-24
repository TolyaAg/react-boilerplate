import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/NotStudyPersonAction';
import NotStudyPerson from '../components/NotStudyPersonComponent';

class NotStudyPersonContainer extends React.Component {

  render() {
    return (
      <NotStudyPerson {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, action)(NotStudyPersonContainer);