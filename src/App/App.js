import React from 'react';
import logo from '../logo.svg';
import Canvas from '../Canvas/Canvas'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  render() {
    return (
        <div className="App">
          {/* <form>
          <input type="text" name="username"/>
          <input type="password" name="password"/>
        </form> */}
          <Canvas />
        </div>
    )
  }
}

export default App;