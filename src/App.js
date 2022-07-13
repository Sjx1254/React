import React, { Component } from 'react';
import Main from './components/MainComponent'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import './App.css';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className= "App">
        <Main /> 
      </div>
    </BrowserRouter>
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)
  //The Main component in the tag will display the maincomponent
}

export default App;

