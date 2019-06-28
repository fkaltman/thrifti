import React from 'react';
import './App.css';
import { fetchStores } from "./services/stores";

class App extends React.Component {

  async componentDidMount() {
    const thriftStores = await fetchStores();
    console.log(thriftStores)
    debugger;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}


export default App;
