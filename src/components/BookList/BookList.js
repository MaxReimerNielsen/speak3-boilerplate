import React, { PropTypes } from 'react';

function BookList(props) {
  const {
    data,
  } = props;

  const books = data.map((book, index) => (
    <li key={index}>{book.title} by {book.author}</li>
  ));

  return (
    <ul>
      {books}
    </ul>
  );
}

BookList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BookList;
