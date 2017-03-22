import React, { Component } from 'react';
import Filter from './Filter';
import TaskList from './TaskList';
import TaskAdder from './TaskAdder';
import './TaskBox.css';

class TaskBox extends Component {
    constructor(props) {
        super(props);
        this.filter = '';
        this.state = {
            tasks: [],
            foundedTasks: 0
        };

        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleTaskAdd(task) {
        this.setState((state) => {
            tasks: state.tasks.push({    
                text: task,
                highlight: {
                    show: false
                }
            })
        });
        this.filterTasks();
    }

    handleFilterChange(filter) {
        this.filter = filter.split(' ')[0];
        this.filterTasks();
    }

    filterTasks() {
        this.setState(previousState => ({
            tasks: this.getFilteredTasks(previousState),
            foundedTasks: this.foundedTasks
        }));
    }

    getFilteredTasks(previousState) {
        let regex = new RegExp('' + this.filter + '', 'gi');
        this.foundedTasks = 0;

        return previousState.tasks.map((task, idx) => {
            let segments = task.text.split(regex);
            let replacements = task.text.match(regex);
            let taskFounded = this.filter && segments.length > 1;
            let textChildren = [];

            segments.forEach((segment, i) => {
                textChildren.push(React.DOM.span({}, segment));
                if (segments.length === i + 1) return;
                textChildren.push(React.DOM.span({
                    className: 'highlighted'
                }, replacements[i]));
            });

            if (taskFounded) {
                this.foundedTasks++;
            }
            task.number = idx + 1;
            task.render = textChildren;
            return task;
        });
    }

  render() {
      const styles = {
          display: 'flex',
          flexDirection: 'column',
          marginTop: '25px',
          border: '3px solid grey',
          minHeight: '400px',

          padding: '0 20px 30px 20px'
      };
    return (
        <div style={styles}>
            <h2>Tasks</h2>
            <Filter changeHandler={this.handleFilterChange} foundedTasks={this.state.foundedTasks}/>
            <TaskList tasks={this.state.tasks}/>
            <TaskAdder taskAddHandler={this.handleTaskAdd}/>
        </div>
    );
  }
}

export default TaskBox;
