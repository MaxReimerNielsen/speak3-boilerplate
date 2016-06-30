import React, { PropTypes } from 'react';
import BooksContainers from '../../containers/Books/BooksContainer';

function BooksPage(props) {
  return (
    <div>
      <h2>You should read these books</h2>
      <BooksContainers data={props.books} />
    </div>
  );
}

BooksPage.propTypes = {
  books: PropTypes.array,
};

export default BooksPage;
