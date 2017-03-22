import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        const btnStyles = {
            marginLeft: 15
        };

        return (
            <div className="form-group bottom">
                <label htmlFor="add-task-input">New task</label>
                <TextField
                    hintText="Type what should you do"
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
                    style={btnStyles}
                />
            </div>
        );
  }
}

export default TaskAdder;
