import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import './App.css';
import Menu from './components/MenuComponent'


class App extends Component {
  render() {
  return (
    <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand> 
      </div>
      </Navbar>
      <Menu /> 
    </div>
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)
}

export default App;

