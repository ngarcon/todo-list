import React, { Component } from 'react';

import './style.css';

export class Counter extends Component {

  

  render() {

    const {counterLabel} = this.props; 

    return (

      <h2 className="counter">
        {counterLabel}
      </h2>
    )
  }
}

export default Counter
