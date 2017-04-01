import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import Constants from '../../common/constants'
import './FoundedTasksBar.css'

class FoundedTasksBar extends Component {
    render() {
        let tasksWord = this.props.foundedTasks === 1 ? 'task' : 'tasks';
        let taskStateWord = this.props.filterState === Constants.menuTabs.ACTIVE ? 'active' : 'completed';
        return (
            <div className="founded-tasks-bar">
                <FontAwesome name="search" className="search-icon" />
                <span>{this.props.foundedTasks} {taskStateWord} {tasksWord} founded by filter</span>
            </div>
        )
    }
}

export default FoundedTasksBar;
