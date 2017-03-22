import React, { Component } from 'react';

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
                <input
                    type="text"
                    id="task-filter" 
                    onChange={this.handleChange}
                />
                <span>0 tasks found</span>
            </div>
        );
    }
}

export default Filter;
