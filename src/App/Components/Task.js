import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <span className="task">
                {this.props.task.number}. {this.props.task.render}
            </span>
        );
  }
}

export default Task;
