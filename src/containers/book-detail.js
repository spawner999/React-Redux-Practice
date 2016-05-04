import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail</div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStatetoProps)(BookDetail);
