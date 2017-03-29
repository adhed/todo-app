import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontAwesome from 'react-fontawesome';
import Contants from '../Common/Constants';
import './TaskAdder.css';

class TaskAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', errorText: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.input.focus();
    }

    handleSubmit() {
        if (!this.state.value) {
            this.setState({errorText: 'Task cannot be empty.'});
            return;
        }

        this.props.taskAddHandler(this.state.value);
        this.setState({value: ''});
        this.input.focus();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            errorText: ''
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    render() {
        return (
            <div className="form-group task-adder bottom">
                <FontAwesome 
                    size="lg"
                    name="plus-circle" 
                    alt="add"
                    className="add-task-icon" />
                <TextField
                    floatingLabelText="Type what should you do"
                    floatingLabelStyle={Contants.formStyles.floatingLabelStyle}
                    underlineStyle={Contants.formStyles.underlineStyle}
                    inputStyle={Contants.formStyles.inputStyle}
                    ref={(input) => { this.input = input; }}
                    id="add-task-input" 
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    errorText={this.state.errorText}
                />
                <RaisedButton
                    label="Add!" 
                    primary={true} 
                    onClick={this.handleSubmit}
                    className="btn-add"
                />
            </div>
        );
  }
}

export default TaskAdder;
