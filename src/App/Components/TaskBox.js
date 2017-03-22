import React, { Component } from 'react';
import Filter from './Filter';
import TaskList from './TaskList';
import TaskAdder from './TaskAdder';

class TaskBox extends Component {
    constructor(props) {
        super(props);
        this.filter = '';
        this.state = {
            tasks: []
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
        this.filter = filter.toLowerCase();
        this.filterTasks();
    }

    filterTasks() {
        this.setState((state) => {
            tasks: state.tasks.forEach(task =>  {
                if (this.filter) {
                    let idx = task.text.indexOf(this.filter);
                    let phraseExists = idx > -1;
                    let filterLength = this.filter.length;

                    task.highlight = {
                        show: phraseExists,
                        startIdx: idx,
                        endIdx: idx + filterLength,
                        filter: this.filter
                    };
                }
            });
        });
    }

  render() {
      const styles = {
          display: 'block',
          position: 'relative',
          marginTop: '25px',
          border: '2px solid grey',
          minHeight: '400px'
      };
    return (
        <div style={styles}>
            <h2>Tasks</h2>
            <Filter changeHandler={this.handleFilterChange} />
            <TaskList tasks={this.state.tasks}/>
            <TaskAdder taskAddHandler={this.handleTaskAdd}/>
        </div>
    );
  }
}

export default TaskBox;
