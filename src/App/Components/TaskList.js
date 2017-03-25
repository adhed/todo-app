import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {
  render() {
      return (
            <div className="task-list">
                {this.props.tasks.map(task => {
                    return <Task task={task} />
                })}
            </div>
        );
  }
}

export default TaskList;
