import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFoundedTasks } from '../../actions/actionCreators'
import Task from './Task'
import './TaskList.css'

class TaskList extends Component {
    getTasksList() {
        return this.props.tasks.map((task, idx) => {
            return <Task key={idx} task={task} number={idx+1}/>
        })
    }

    render() {
        
        let isTaskListEmpty = this.props.tasks.length === 0;
        let render = null;

        if (isTaskListEmpty) {
            render = <h2>You don't have any tasks to do, enjoy this free day!</h2>
        } else {
            render = this.getTasksList();
        }

        return (
                <div className="task-list">
                    {render}
                </div>
            );
    }
}

export default connect()(TaskList);
