import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

//testing React.fragment
//code snippet
// { if.this.props.articles ? 
//   <React.Fragment>
//       <Route path="results" component={Results} />,
//       <Route path="saved" component={Saved} />
//       <Route path="search" component={Search} />

//   </React.Fragment>
// : null }

  
  }
}

export default App;
