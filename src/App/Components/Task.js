import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <h2>
                {this.props.task.number}. {this.props.task.render}
            </h2>
        );
  }
}

export default Task;
