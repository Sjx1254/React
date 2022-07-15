import React, { Component } from 'react';
import Main from './components/MainComponent'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //redux store can now have access to all components
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className= "App">
            <Main /> 
          </div>
        </BrowserRouter>
      </Provider>
    );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)
  //The Main component in the tag will display the maincomponent
}

export default App;

