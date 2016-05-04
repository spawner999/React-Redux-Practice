import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStatetoProps(state) {
  return {
    books: state.books
  };
}

//anything retured from this function will end as a prop inside of this component/container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called dispatch result to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container, needs to know this new dispatch method
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
