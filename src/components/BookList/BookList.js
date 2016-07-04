import React, { PropTypes } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

function BookList(props) {
  const {
    data,
  } = props;

  const books = data.map((book, index) => (
    <ListGroupItem key={index} header={book.title}>{book.author}</ListGroupItem>
  ));

  return (
    <ListGroup>
      {books}
    </ListGroup>
  );
}

BookList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BookList;
