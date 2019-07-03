//App.js
import React from 'react';
import './App.css';
import { fetchStores } from "./services/stores";
import StoreCards from './components/StoreCards';
import EnterZip from './components/EnterZip';
import { Route, Link, withRouter } from 'react-router-dom';
import Home from './components/Home';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      zip: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    // passes this.state.zip as an argument to handleSearch
    this.handleSearch(this.state.zip);
    this.props.history.push("/stores-by-zip")
  }

  handleSearch = async (zipCode) => {
    const data = await fetchStores(zipCode);
    console.log(this.state.stores)
    this.setState({
      stores: data.businesses
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Link className="home" to="/"></Link>
          <Link className="zipz" to="/enter-zip"></Link>
          {/* <Link to="/stores-by-zip">View Stores</Link> */}
        </header>
        <Route exact path="/" component={Home} />
        <Route
          path="/stores-by-zip" render={() => <StoreCards stores={this.state.stores} />} />
        <div id="display">
          <Route
            path="/enter-zip" render={(props) => <EnterZip {...props} handleSubmit={this.handleSubmit} handleChange={this.handleChange} val={this.state.zip} />} />
        </div>
      </div>
    );
  }
}


export default withRouter(App);
