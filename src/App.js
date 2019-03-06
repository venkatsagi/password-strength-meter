import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PasswordInput from './components/password-input';

class App extends Component {
  constructor() {
    super();    
    this.state = {
      password: ''
    };
    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
  }

  handlePasswordChanges(event) {
    this.setState({ password: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <PasswordInput  
            value={this.state.password}
            placeholder='Type your password'
            handleChanges={this.handlePasswordChanges}
          />
        </div>
      </div>
    );
  }
}

export default App;
