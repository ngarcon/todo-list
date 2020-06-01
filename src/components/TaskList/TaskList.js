import React, { Component } from 'react'; 


import Task from '../Task/Task'; 

export class TaskList extends Component {

  render() {
    const {tasks, handleCheckTask} = this.props; 

    console.log('this.props', this.props);
    return (

      <ul>
        {tasks.map(task => <Task 
        key={task.id} 
        taskId={task.id}
        task={task} 
        handleCheckTask={handleCheckTask}/>)}
      </ul>
    )
  }
}

export default TaskList
