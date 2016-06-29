import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Master(props) {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
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
