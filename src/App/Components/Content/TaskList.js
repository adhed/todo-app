import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFoundedTasks } from '../../actions/actionCreators'
import Task from './Task'
import Constants from '../../common/constants'
import './TaskList.css'

class TaskList extends Component {
    getTasksList() {
        return this.props.tasks.map((task, idx) => {
            return <Task key={idx} task={task} number={idx+1}/>
        })
    }

    render() {
        
        let isTaskListEmpty = this.props.tasks.length === 0;
        let completedTasksAreVisible = this.props.filterStateValue !== Constants.menuTabs.COMPLETED;
        let render = null;

        if (isTaskListEmpty) {
            let emptyListText = completedTasksAreVisible ? 
                    "You don't have any tasks to do, enjoy this free day!"
                    : "You haven't completed any tasks yet, come on!";
            render = <h2>{emptyListText}</h2>
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

const mapStateToProps = (state) => {
    return {
        filterStateValue: state.filterState.value
    }
}

export default connect(mapStateToProps)(TaskList);
