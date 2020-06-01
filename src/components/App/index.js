// == Import npm
import React, {useState, useEffect} from 'react';

import Form from '../Form/Form'; 
import Counter from '../Counter/Counter'; 
import TaskList from '../TaskList/TaskList'; 
// == Import
import './styles.css';

const data = [{
  id: 1, 
  task: "Garder les chiens du voisin",
  done: false
},{
  id: 2, 
  task: "Faire un gâteau",
  done: false
},{
  id: 3, 
  task: "Remplir l'arrosoire",
  done: false
}]; 

// == Composant
const App = _ => {
  
  
  const [taskList, setTaskList] = useState(data); 
  const [index, setIndex] = useState(4); 
  
  const getRunningTasks = (currentTaskList) => {
    
    const allDOMCurrentTasks = currentTaskList.filter(entry => !entry.done); 
    
    const numberDisplay = (!!allDOMCurrentTasks.length) ? allDOMCurrentTasks.length : "Aucune"; 
    
    // Plural settings
    const taskAccordance = (allDOMCurrentTasks.length > 1 ) ? 's' : '';
    
    return `${numberDisplay} tâche${taskAccordance} restantes`;
  }
  
  // We update the title attribute (in the HTML head)
  //document.title = this.getRunningTasks(this.state.taskList);
  
  // We update the title attribute (in the HTML head)
  // document.title = this.getRunningTasks(this.state.taskList);
  
  
  const handleSubmit= (event) => {
    //* Call to new task validation (DOM related) 
    
    // Prevent page being reload after form submission
    event.preventDefault(); 
    // Request a state update to add the label to a new list. 
    addTaskToList(event.target.newTask.value);
    // Reset the value of the 
    event.target.newTask.value = ''; 
  }
  
  const addTaskToList = (taskLabel) => {
    
    //? Created a new object
    
    const newEntry = {
      // current index in state 
      // /!\ not a good practice,  simply used here to identify all new tasks
      id: index, 
      task: taskLabel,
      // By default the task is set to do
      done: false
    };
    
    //? Update the state for rerendering
    setTaskList(taskList.concat(newEntry));
    setIndex(index + 1);

    


  }
  
  const handleCheckTask = (event) => {
    //* Callback function to checkbox being clicked on (DOM related) 
    
    // Retrieve the id of the concerned task
    const taskId = event.target.closest('li').getAttribute('task-id');
    // Get the updated state from the element
    const taskState = event.target.checked; 
    // Engage a state update for the pointed task
    setTaskState(taskId, taskState); 
  }
  
  const setTaskState = (taskId, taskState) => {
    //* Update the 'done' property of the pointed task in the state
    // Create a COPY of the wished updated taskList in the state
    // from the current taskList in the state
    const newList = taskList.map(task => {
      // Upon match of the component id 
      if (taskId == task.id) {
        // Create a COPY of the data object : doppleganger
        const update = {
          ...task, // ...task => copy all properties 
          done: taskState // and modify/overwrite the 'done' prop to receive the value of taskState 
        }
        // We return the modified doppleganger of the task object
        return update; // return the new object instead of the current task in the state 
      }
      return task; 
    }); 
    
    // Replace current taskList with the freshly created list in the state
    setTaskList(newList); 
    // setState() is a native method from React Component class that's call upon render() method to update the DOM after applying changes to the state. 
    
  }; 
  
  const taskLabel = getRunningTasks(taskList); 

  useEffect(() => {
    document.title = taskLabel; 
  }); 
  
  return (
    <div className="app">
      <div className="container">
      {/* Form Component */}
        <Form 
        handleSubmit={handleSubmit}
        />
        {/* Left task counter Component*/}
        <Counter 
        counterLabel={taskLabel} 
        />
        {/* Task container component */}
        <TaskList 
        tasks={taskList}
        handleCheckTask={handleCheckTask}
        />  
      </div>
    </div>
    )
    
  };
  
  // == Export
  export default App;
