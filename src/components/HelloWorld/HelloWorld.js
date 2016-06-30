import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import defaultStyle from './HelloWorld.style';

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
    const styles = Object.assign({}, defaultStyle, this.props.style);

    return (
      <div style={styles}>
        HelloWorld!
      </div>
    );
  }
}
export default radium(ComponentCard);
