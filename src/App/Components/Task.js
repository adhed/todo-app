import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <h2>
                {this.props.task.render || this.props.task.text}
            </h2>
        );
  }
}

export default Task;
