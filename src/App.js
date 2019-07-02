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
          {/* <h1>thrifti</h1> */}
          {/* <Link className="home" to="/">thrifti</Link> */}
          {/* <StoreCards stores={this.state.stores} /> */}
          <EnterZip handleSubmit={this.handelSubmit} handleChange={this.handleChange} />

        </header>
      </div>
    );
  }
}


export default App;
