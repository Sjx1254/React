import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import './App.css';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }
  render() {
  return (
    <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand> 
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes} /> 
    </div>
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)
}

export default App;

