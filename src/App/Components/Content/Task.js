import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTaskState } from '../../actions/actionCreators';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            removerVisible: false,
            inverseIcon: false
        };
        this.handleTaskMouseOver = this.handleTaskMouseOver.bind(this);
        this.handleTaskMouseOut = this.handleTaskMouseOut.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleIconStateMouseOver = this.handleIconStateMouseOver.bind(this);
        this.handleIconStateMouseOut = this.handleIconStateMouseOut.bind(this);
        this.handleIconStateClick = this.handleIconStateClick.bind(this);
    }

    handleTaskMouseOver() {
        this.setState({removerVisible: true});
    }
    
    handleTaskMouseOut() {
        this.setState({removerVisible: false});
    }

    handleRemoveClick() {
        this.props.dispatch(removeTask(this.props.task.id, this.props.task.isCompleted));
    }
    
    handleIconStateMouseOver() {
        this.setState({ inverseIcon: true });
    }

    handleIconStateMouseOut() {
        this.setState({ inverseIcon: false });
    }

    handleIconStateClick() {
        this.props.dispatch(toggleTaskState(this.props.task.id));
    }

    getIconStateName() {
        return this.props.task.isCompleted 
            ? (this.state.inverseIcon ? 'square-o' : 'check-square-o') 
            : (this.state.inverseIcon ? 'check-square-o' : 'square-o');
    }
    
    render() {
        let removerClasses = classNames({
            'task-remover': true,
            'remover-visible': this.state.removerVisible,
            'remover-hidden': !this.state.removerVisible,
        });     
        let divContentClasses = classNames({
            'task-content': true,
            'completed': this.props.task.isCompleted
        });
        let stateIconTitle = this.props.task.isCompleted ? 'active' : 'completed';
        let stateIconName = this.getIconStateName();
        
        return (
            <div className="task" 
                key={this.props.task.number}
                onMouseOut={this.handleTaskMouseOut}
                onMouseOver={this.handleTaskMouseOver}>               
                <FontAwesome
                    className="icon-state task-icon-uncheck"
                    title={`Mark this task as ${stateIconTitle}`}
                    onClick={this.handleIconStateClick}
                    onMouseOver={this.handleIconStateMouseOver}
                    onMouseOut={this.handleIconStateMouseOut}
                    name={stateIconName} />
                 <div className={divContentClasses}>
                     <span>{this.props.number}. </span>
                     {this.props.task.content}   
                 </div>            
                 <FontAwesome 
                    name="trash-o" 
                    className={removerClasses} 
                    onClick={this.handleRemoveClick}
                    title="Remove task" /> 
            </div>
        );
  }
}

export default connect()(Task);
