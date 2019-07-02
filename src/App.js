//App.js
import React from 'react';
import './App.css';
import { fetchStores } from "./services/stores";
import StoreCards from './components/StoreCards';
import EnterZip from './components/EnterZip';
import { Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      zip: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.handleSearch(this.state.zip);
  }

  handleSearch = async (zipCode) => {
    const data = await fetchStores(zipCode);
    console.log(this.state.stores)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="home" to="/">thrifti</Link>
          <Link className="zipz" to="/enter-zip"></Link>

        </header>
        <div id="display">
          <Route
            path="/enter-zip" render={() => <EnterZip handleSubmit={this.handleSubmit} handleChange={this.handleChange} val={this.state.zip} />} />


        </div>
      </div>
    );
  }
}


export default App;
