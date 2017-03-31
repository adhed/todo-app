import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import './FoundedTasksBar.css'

class FoundedTasksBar extends Component {
    render() {
        let tasksWord = this.props.foundedTasks === 1 ? 'task' : 'tasks';
        return (
            <div className="founded-tasks-bar">
                <FontAwesome name="search" className="search-icon" />
                <span>{this.props.foundedTasks} {tasksWord} founded by filter</span>
            </div>
        )
    }
}

export default FoundedTasksBar;
