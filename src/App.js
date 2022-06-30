import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand> 
      </div>
      </Navbar>
    </div>
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
}

export default App;

