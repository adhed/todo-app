import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
  render() {
    return (
        <div className="container">
            {this.props.element}
        </div>
    );
  }
}

export default Container;
