import React, { Component } from 'react'; 


import './style.css';

export class Form extends Component {
  render() {

    const {handleSubmit} = this.props; 
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="newTask" placeholder="Ajouter une tâche"/>
      </form>
    )
  }
}

export default Form
