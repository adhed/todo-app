import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {

    getTasksList(tasksKeys) {
        return tasksKeys.map((taskName, idx) => {
            return <Task key={idx} task={this.props.tasks[taskName]} />
        })
    }

    render() {
        let tasksKeys = Object.keys(this.props.tasks);
        let isTaskListEmpty = tasksKeys.length === 0;
        let render = null;

        if (isTaskListEmpty) {
            render = <h2>You're free today, enjoy this day!</h2>
        } else {
            render = this.getTasksList(tasksKeys);
        }

        return (
                <div className="task-list">
                    {render}
                </div>
            );
    }
}

export default TaskList;
