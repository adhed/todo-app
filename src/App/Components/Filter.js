import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeHandler(event.target.value);
    };

    render() {
        const styles = {
            padding: '15px'
        };
        return (
            <div style={styles}>
                <label htmlFor="task-filter">Filter</label>
                <TextField 
                    hintText="Type filter"
                    id="task-filter"
                    onChange={this.handleChange}
                />
                <span>{this.props.foundedTasks} tasks found</span>
            </div>
        );
    }
}

export default Filter;
