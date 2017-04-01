import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import TaskRemover from './TaskRemover'
import FoundedTasksBar from './FoundedTasksBar'
import Constants from '../../common/constants'
import './Content.css'

class Content extends Component {
    render() {
        let tasksAmount = (this.props.tasks && this.props.tasks.length) || 0;
        return(
            <div className="content">
                { this.props.isFoundedTasksBarVisible && this.props.filterTerm ?
                    <FoundedTasksBar 
                        foundedTasks={this.props.foundedTasks} 
                        filterState={this.props.filterState} /> 
                    : null 
                 }
                <TaskList tasks={this.props.tasks} />
                <TaskRemover tasksAmount={tasksAmount} />
            </div>
        )
    }
}

const getHighlightedSpan = (term) => {
    return [].push(React.DOM.span({
        className: 'highlighted'
    }, term));
}

const filterTasksByTerm = (tasks, term) => {
    let filteredTasks = [];
    let foundedTasks = 0;

    filteredTasks = tasks.map((task, idx, tasks) => {
        let newTask = Object.assign({}, task);
        const { contentParts, taskFounded } = parseTaskContent(task.content, term);
        taskFounded && foundedTasks++;
        newTask.content = contentParts;
        return newTask;
    });
    
    return { filteredTasks, foundedTasks };
}

const parseTaskContent = (content, term) => {
    const regex = new RegExp(`${term}`, 'gi');
    let segments = content.split(regex);
    let replacements = content.match(regex);
    let taskFounded = segments.length > 1;
    let contentParts = [];

    segments.forEach((segment, i) => {
        let filterFounded = segments.length !== i + 1;
        contentParts.push(React.DOM.span({key: i}, segment));
        filterFounded && contentParts.push(React.DOM.span({
            className: 'highlighted',
            key: `${i}-high`
        }, replacements[i]));
    });

    return { contentParts, taskFounded };
}

const parseTasksByState = (tasks, state) => {
    switch (state) {
        case Constants.menuTabs.ACTIVE:
            return tasks.filter((task) => !task.isCompleted);
        case Constants.menuTabs.COMPLETED:
            return tasks.filter((task) => task.isCompleted);
        default:
            return tasks;
    }
}

const mapStateToProps = (state) => {
    const parsedTasks = parseTasksByState(state.tasks.tasks, state.filterState.value);
    const { filteredTasks, foundedTasks } = filterTasksByTerm(parsedTasks, state.filterTerm.value);

    return {
        tasks: filteredTasks,
        isFoundedTasksBarVisible: state.filterTerm.visible,
        foundedTasks,
        filterState: state.filterState.value,
        filterTerm: state.filterTerm.value
    }
}

export default connect(mapStateToProps)(Content);