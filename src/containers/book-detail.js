import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Click on a book to see info</div>;
    }
    return (
      <div>
      <h3>Details For: </h3>
      <div>{this.props.book.title}</div>
      <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStatetoProps)(BookDetail);
