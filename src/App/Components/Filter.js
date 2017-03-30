import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Contants from '../Common/Constants';
import FontAwesome from 'react-fontawesome';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.changeHandler(event.target.value);
    };

    handleRemoveClick(event) {
        this.setState({value: ''});
        this.props.changeHandler('');
    };

    render() {
        let tasksWord = this.props.foundedTasks === 1 ? 'task' : 'tasks';

        return (
            <div className="filter form-group">
                <FontAwesome 
                    name="filter" 
                    size="lg"
                    alt="filter"
                    className="filter-icon" />
                <TextField 
                    floatingLabelText="Filter tasks by"
                    floatingLabelStyle={Contants.formStyles.floatingLabelStyle}
                    underlineStyle={Contants.formStyles.underlineStyle}
                    inputStyle={Contants.formStyles.inputStyle}
                    value={this.state.value}
                    id="task-filter"
                    onChange={this.handleChange}
                />
                <FontAwesome 
                    name="times"
                    className="filter-remover" 
                    onClick={this.handleRemoveClick}
                    title="Remove filter" />
                <span>{this.props.foundedTasks} {tasksWord} found</span>
            </div>
        );
    }
}

export default Filter;
