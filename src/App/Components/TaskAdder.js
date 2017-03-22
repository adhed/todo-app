import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TaskAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.input.focus();
    }

    handleSubmit() {
        this.props.taskAddHandler(this.state.value);
        this.setState({
            value: ''
        });
        this.input.focus();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    render() {
        const styles = {
            position: 'absolute',
            bottom: 0
        };
        return (
            <div style={styles}>
                <label htmlFor="add-task-input">New task</label>
                <TextField
                    hintText="Type what should you do"
                    ref={(input) => { this.input = input; }}
                    id="add-task-input" 
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <RaisedButton
                    label="Add!" 
                    primary={true} 
                    onClick={this.handleSubmit}
                />
            </div>
        );
  }
}

export default TaskAdder;
