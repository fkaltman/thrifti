//App.js
import React from 'react';
import './App.css';
import { fetchStores } from "./services/stores";
import StoreCards from './components/StoreCards';
import EnterZip from './components/EnterZip';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: []
    }
  }

  async componentDidMount() {
    const data = await fetchStores();
    this.setState({
      stores: data.businesses
    })
    console.log(this.state.stores)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>thrifti</h1> */}

          {/* <Link className="home" to="/">thrifti</Link> */}
          <StoreCards stores={this.state.stores} />
          {/* <EnterZip /> */}
        </header>
      </div>
    );
  }
}


export default App;
