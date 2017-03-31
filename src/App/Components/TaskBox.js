import React, { Component } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './TaskBox.css';

class TaskBox extends Component {
  render() {
    return (
        <div className="task-box">
            <Header />
            <Content />
            <Footer />
        </div>
    );
  }
}

export default TaskBox;