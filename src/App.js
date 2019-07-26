import React, { Component } from 'react';
import Stepper from "./components/stepper";
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className='width-app'>
        <Stepper />
      </div>
    )
  }
}

export default App