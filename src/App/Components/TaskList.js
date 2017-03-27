import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {
  render() {
      return (
            <div className="task-list">
                {Object.keys(this.props.tasks).map((taskName, idx) => {
                    return <Task key={idx} task={this.props.tasks[taskName]} />
                })}
            </div>
        );
  }
}

export default TaskList;
