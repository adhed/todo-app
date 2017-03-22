import React, { Component } from 'react';

class Container extends Component {
  render() {
      const styles = {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
      };

    return (
        <div style={styles}>
            {this.props.element}
        </div>
    );
  }
}

export default Container;
