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
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators' //need this to get the action object to then dispatch to the store
import { actions } from 'react-redux-form'


const mapStateToProps = (state) => { //maps the states from the redux store as props to use in the main component
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }

}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)), //this returns the action object addComment and calls the dispatch function to send the object created by addComment on the 4 props to the store
  fetchDishes: () => { dispatch(fetchDishes()) }, //here fetch dishes is called from the the fetchDishes in the store and this returns the dishes and their states and returns a fetchDish object to be used as props in the main
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}, //calls the dispatch function to send it to the store that the form needs to be reset. When this is accessed by main, the resetFormFeedback prop is created to trigger the reset
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) }
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

  

  componentDidMount() {
    this.props.fetchDishes(); //this gets the dishes and their individual properties so that they can be accessed by main and rendered/shown in the other components (same for promos and comments)
    this.props.fetchPromos();
    this.props.fetchComments(); 
  }



  render() {

  const HomePage = () => {
    return(
      <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured) [0]} //Main no longer has it's own built-in state, but is rather passed in the state by the store via props
      //In the thunk lecture, we are now accessing the dishes part of the dishes state and filtering it to return the featured dish (same processfor the ID below)
      //Two more props are passed to homepage to render in case of loading/errors (same for dishdetail)
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        promotion = {this.props.promotions.promotions.filter((promo) => promo.featured) [0]}
        promosLoading = {this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess}
        leader = {this.props.leaders.filter((leader) => leader.featured) [0]} />
    )
  }

  const DishWithId = () => {
    const { dishId } = useParams();
    return(
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === Number(dishId)) [0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === Number(dishId))}
        commentsErrMess={this.props.comments.errMess}
        addComment={this.props.addComment}/> //the addComment object created from mapDispatchtoProps is passed as a prop here
        //passing in the error message for comments

        //all the errors message now are passed in as props to the respective component after the handle errors for each of the action creators are properly made, through the errMess property of the state for each component
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
        <Route exact path="/contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} /> 
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
  
  //passing in the resetFeedbackForm prop to contactus to trigger the reset
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); //connects Redux to the component
