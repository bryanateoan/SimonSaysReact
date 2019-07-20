import React from 'react';
import './App.css';
import SimonSays from './components/SimonSays';
class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Simon Says React!
          </p>
        </header>
        <body>
          <SimonSays/>
        </body>
      </div>

    );
  }
}

export default App;
