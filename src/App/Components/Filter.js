import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeHandler(event.target.value);
    };

    render() {
        let tasksWord = this.props.foundedTasks === 1 ? 'task' : 'tasks';

        return (
            <div class="filter">
                <label htmlFor="task-filter">Filter</label>
                <TextField 
                    hintText="Tasks filter"
                    id="task-filter"
                    onChange={this.handleChange}
                />
                <span>{this.props.foundedTasks} {tasksWord} found</span>
            </div>
        );
    }
}

export default Filter;
