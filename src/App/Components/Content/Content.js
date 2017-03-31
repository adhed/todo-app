import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';

class Content extends Component {
    render() {
        return(
            <TaskList tasks={this.props.tasks} />
        )
    }
}

const parseTasks = (tasks, filter) => {
    switch (filter) {
        default:
            return tasks;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: parseTasks(state.tasks) 
    }
}

export default connect(mapStateToProps)(Content);