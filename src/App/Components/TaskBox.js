import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Filter from './Filter';
import TaskList from './TaskList';
import TaskAdder from './TaskAdder';
import Title from './Title';
import MenuBar from './MenuBar';
import FilterSwitcher from './FilterSwitcher';
import Constants from '../Common/Constants';
import './TaskBox.css';

class TaskBox extends Component {
    constructor(props) {
        super(props);
        this.filter = '';
        this.state = {
            foundedTasks: 0,
            tasks: {},
            isFilterVisible: false
        };

        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
    }

    handleToggleChange(isFilterOn) {
        this.setState({
            isFilterVisible: isFilterOn
        });
        if (!isFilterOn) {
            this.filter = '';
            this.filterTasks();
        }
        
    }

    handleMenuChange(value) {
       
    }

    handleTaskAdd(taskTxt) {
        this.setState(previousState => {
            let tasks = previousState.tasks;
            let newTaskIdx = Object.keys(this.state.tasks).length + 1;
            let newTask = {
                text: taskTxt,
                highlight: {show: false}
            };

            tasks[newTaskIdx] = newTask;
            return {
                tasks: tasks
            }
        });
        this.filterTasks();
    }

    handleFilterChange(filter) {
        this.filter = filter;
        this.filterTasks();
    }

    removeTaskHandler(taskNumber) {
        this.setState(previousState => {
            delete previousState.tasks[taskNumber];
            return {
                tasks: previousState.tasks
            };
        });
        this.filterTasks();
    }

    filterTasks() {
        this.setState(previousState => {
            return {
                tasks: this.getFilteredTasks(previousState),
                foundedTasks: this.foundedTasks
            }
        });
    }

    getFilteredTasks(previousState) {
        let filteredTasks = {};
        let taskIdx = 0;
        this.foundedTasks = 0;

        for (let taskNumber of Object.keys(previousState.tasks)) {
            let task = previousState.tasks[taskNumber];
            let { textParts, taskFounded } = this.parseTaskText(task.text);
        
            taskFounded && this.foundedTasks++;
            task.number = ++taskIdx;
            task.render = textParts;
            task.removeTaskCallback = this.removeTaskHandler;
            filteredTasks[task.number] = task;
        }
       return filteredTasks;
    }

    parseTaskText(taskText) {
        let regex = new RegExp(this.filter, 'gi');
        let segments = taskText.split(regex);
        let replacements = taskText.match(regex);
        let taskFounded = this.filter && segments.length > 1;
        let textParts = [];

        segments.forEach((segment, i) => {
            let filterFounded = segments.length !== i + 1;

            textParts.push(React.DOM.span({key: i}, segment));

            filterFounded && textParts.push(React.DOM.span({
                className: 'highlighted',
                key: `${i}-high`
            }, replacements[i]));
        });

        return {
            textParts: textParts,
            taskFounded: taskFounded
        };
    }

  render() {
    return (
        <div className="task-box">
            <Row className="top-bar">
                <Col xs={8}>
                    <Title />
                </Col>
                <Col xs={4}>
                    <FilterSwitcher onToggleHandler={this.handleToggleChange} />
                </Col>
            </Row>
            { this.state.isFilterVisible ?
                <Filter changeHandler={this.handleFilterChange} foundedTasks={this.state.foundedTasks}/> : null
            }
            <MenuBar changeHandler={this.handleMenuChange}/>
            <TaskList tasks={this.state.tasks}/>
            <TaskAdder taskAddHandler={this.handleTaskAdd}/>
        </div>
    );
  }
}

export default TaskBox;
