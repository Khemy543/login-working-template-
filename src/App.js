import React, { Component } from 'react';
import './App.css';
import { Routers } from './route';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return(
    <React.Fragment>
    <Routers />
    </React.Fragment>
    )
  }
}
export default App;
