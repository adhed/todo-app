import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../actions/actionCreators';
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
        this.props.dispatch(removeTask(this.props.task.id));
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
                {this.props.number}. {this.props.task.content}
            </div>
        );
  }
}

export default connect()(Task);
