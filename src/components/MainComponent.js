import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Routes, Route, Navigate, useLocation, useNavigate, useParams} from 'react-router-dom'
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators' //need this to get the action object to then dispatch to the store

const mapStateToProps = (state) => { //maps the states from the redux store as props to use in the main component
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }

}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)) //this returns the action object addComment and calls the dispatch function to send the object created by addComment on the 4 props to the store


})

function withRouter(Component) { //implementation of withRouter
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class Main extends Component {

  constructor(props) {
    super(props);

  }



  render() {

  const HomePage = () => {
    return(
      <Home dish = {this.props.dishes.filter((dish) => dish.featured) [0]} //Main no longer has it's own built-in state, but is rather passed in the state by the store via props
        promotion = {this.props.promotions.filter((promo) => promo.featured) [0]}
        leader = {this.props.leaders.filter((leader) => leader.featured) [0]} />
    )
  }

  const DishWithId = () => {
    const { dishId } = useParams();
    return(
      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === Number(dishId)) [0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === Number(dishId))}
        addComment={this.props.addComment}/> //the addComment object created from mapDispatchtoProps is passed as a prop here
    )

  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/aboutus" element={<About leaders = {this.props.leaders} />} />
        <Route exact path="/menu" element={<Menu dishes = {this.props.dishes} />} />
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
    //the dishId is the route parameter passed in, and this must be the name of the variable when using useParams
    //for the comments, since it already is an array, no [0] is needed
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); //connects Redux to the component
