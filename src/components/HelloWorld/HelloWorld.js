import React, { Component, PropTypes } from 'react';

class ComponentCard extends Component {
  static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  }

  state = {
  };

  render() {
    return (
      <div style={this.props.style}>
        HelloWorld!
      </div>
    );
  }
}
export default ComponentCard;
