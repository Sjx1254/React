import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Routes, Route, Navigate} from 'react-router-dom'


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      
    }
  }


  render() {

  const HomePage = () => {
    return(
      <Home />
    )
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/menu" element={<Menu dishes = {this.state.dishes} />} /> 
        <Route path="*" element={<Navigate to="/home" />}/>
        
      </Routes> 
      <Footer />
    </div> // the arrow function here allows you to pass props when you click on the link that navigates to the menu
    //The Routh path * and Navigate to are a replacement of redirect (the default route to go to if there is nothing in the clicked route)
    //In the latest version of react router you have to use element and surround the call to the component in braces to make it an object
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)

  //when onClick is clicked, the dish ID of the dish that is clicked is passed onto onDishSelect which sets the selectDish to the dishId. This is also passed as a prop to MenuComponent
  //For dishdetail, the dish that is shown is the one which mastches the dishID (first index of the dish in reach index). This is done using the filter function, which traverses the entire array of dishes
  //exact path means that it has to match the path that it is set to (can't just start with it)
}

export default Main;
