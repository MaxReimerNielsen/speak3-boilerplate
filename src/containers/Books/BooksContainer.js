import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookList from '../../components/BookList';
import { getData } from './BooksContainer_actions';

class BooksPage extends Component {
  static propTypes = {
    getData: PropTypes.func,
    books: PropTypes.array,
  }

  constructor(props) {
    super(props);

    if (!props.books.length) {
      props.getData();
    }
  }

  render() {
    return (
      <BookList data={this.props.books} />
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
