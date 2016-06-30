import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Master(props) {
  const defaultLinkProps = {
    className: 'btn btn-default',
    activeClassName: 'btn-primary',
  };

  return (
    <div>
      <nav>
        <Link to="/home" {...defaultLinkProps}>Home</Link>
        <Link to="/books" {...defaultLinkProps}>Books</Link>
      </nav>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

Master.propTypes = {
  children: PropTypes.node,
};

export default Master;
