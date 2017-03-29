import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Title.css';

class Title extends Component {
    render() {
        return(
            <div className="title-box">
                <FontAwesome 
                    className="task-icon"
                    size="lg"
                    name="thumb-tack" />
                <h2 className="title">Your tasks to do</h2>
            </div>
        );
    }
}

export default Title;