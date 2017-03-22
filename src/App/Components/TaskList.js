import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      return (
            <div>
                {this.props.tasks.map(task => {
                    return <Task task={task} />
                })}
            </div>
        );
  }
}

export default TaskList;
