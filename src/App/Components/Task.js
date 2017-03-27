import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = { removerVisible: false };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleMouseOver() {
        this.setState({removerVisible: true});
    }
    
    handleMouseOut() {
        this.setState({removerVisible: false});
    }

    handleRemoveClick() {
        this.props.task.removeTaskCallback(this.props.task.number);
    }
    
    render() {
        let removerClasses = classNames({
            'task-remover': true,
            'remover-visible': this.state.removerVisible,
            'remover-hidden': !this.state.removerVisible
        });

        return (
            <div className="task" 
                key={this.props.task.number}
                onMouseOut={this.handleMouseOut}
                onMouseOver={this.handleMouseOver}>
                <FontAwesome 
                    name='times'
                    className={removerClasses} 
                    onClick={this.handleRemoveClick}
                    title="Remove task" />
                {this.props.task.number}. {this.props.task.render}
            </div>
        );
  }
}

export default Task;
