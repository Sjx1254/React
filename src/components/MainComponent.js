import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import  { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
    }
  }


  render() {

  const HomePage = () => {
    return(
      <Home dish = {this.state.dishes.filter((dish) => dish.featured) [0]}
        promotion = {this.state.promotions.filter((promo) => promo.featured) [0]}
        leader = {this.state.leaders.filter((leader) => leader.featured) [0]} />
    )
  }

  const DishWithId = () => {
    const { dishId } = useParams();
    return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === Number(dishId)) [0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === Number(dishId))}/>
    )

  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/aboutus" element={<About leaders = {this.state.leaders} />} />
        <Route exact path="/menu" element={<Menu dishes = {this.state.dishes} />} />
        <Route path="/menu/:dishId" element={<DishWithId/>} />
        <Route exact path="/contactus" element={<Contact />} /> 
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
  //For dishdetail, the dish that is shown is the one which mastches the dishID (first index of the dish in reach index). This is done using the filter function, which removes every element of the array that doesn't have the given id. Since the output is an array also, the [0] takes the first elemt
  //exact path means that it has to match the path that it is set to (can't just start with it)

  //SPA
    //If a component has no props you can simply call it
    //The filter command here again returns an array containing the featured dish, accessing the first element of that array with the [0]
  
  //SPA part 2
    //Exact prevents problems with both the menu and menu/:dishId being noticed by Routes
    //the dishId is the parameter passed in, and this must be the name of the variable when using useParams
    //fo
}

export default Main;
