import React, { Component } from 'react';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null //this is for the dishdetail component since it will render it
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId}); //setting the selectedDish to the dish that is clicked on
  }

  render() {
  return (
    <div>
      <Header />
      <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />  
      <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish) [0]}/>
      <Footer />
    </div>
  );
  } //dark here means that the text will be light rather than dark (if light then opposite)
  //The menu tag will render the menu component (below the navbar)

  //when onClick is clicked, the dish ID of the dish that is clicked is passed onto onDishSelect which sets the selectDish to the dishId. This is also passed as a prop to MenuComponent
  //For dishdetail, the dish that is shown is the one which mastches the dishID (first index of the dish in reach index). This is done using the filter function, which traverses the entire array of dishes
}

export default Main;
