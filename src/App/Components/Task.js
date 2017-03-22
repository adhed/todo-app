import React, { Component } from 'react';

class Task extends Component {

    getHightlightedTask(task) {
        let hightlightStart = '<span style={background: "yellow"}>';
        let hightlightEnd = '</span>';
        let highlight = `${hightlightStart} ${task.text} </span>`;

        return task.text.replace(task.highlight.filter, highlight);
    }

    render() {
        let task = '';

        if (this.props.task.highlight.show) {
            task = this.getHightlightedTask(this.props.task);
        } else {
            task = this.props.task.text;
        }

        return (
            <h2>
                {task}
            </h2>
        );
  }
}

export default Task;
