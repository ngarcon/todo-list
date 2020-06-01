import React, { Component } from 'react';

import './style.css'; 

class Task extends Component {
  render() {

    const {task, done} = this.props.task;
    const {taskId, handleCheckTask} = this.props; 

    console.log('taskId', taskId);

    let taskClassList = "taskContainer"; 
    taskClassList += (done) ? " done" : ""; 

    return (
      <li className={taskClassList} task-id={taskId}>
        <label>
        <input type="checkbox" onChange={handleCheckTask} defaultChecked={done}/> 
          {task}
        </label>
      </li>
    )
  }
}

export default Task;
