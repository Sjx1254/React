import React from 'react';
import {Card, CardImg, CardImgOverlay,  CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'
import {Breadcrumb, BreadcrumbItem } from 'reactstrap'

    function RenderMenuItem({dish}) { //this will now display the card for the passed in dish that is clicked
        return (
            
                <Card>  
                    <Link to = {`/menu/${dish.id}`} >
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
                    
                    
           //when the card is clicked, the onDishSelect function is called
        ); //the key feature allows React to identify each element uniquely and display them accordingly (you want the key to be unique for each element)
        //li specifies each item will be rendered as a list
        //m-1 sets a margin of 1 to all 4 sides

        //Update:
        //now, when the card is clicked, the onClick function from the MainComponent that was a prop is called, and this sets the dish id of the card so that it can be rendered in dishdetail

        //SFA part 2
            //The backquotes allow the code inside of it to be evaluated. The dish id of the passed in dish is the route parameter that will be added after the menu route for navigation to a particular dish


    }

    const Menu = (props) => { //props is the parameter that is passed in
        const menu = props.dishes.map((dish) => {  //map iterates over each item in the list, and returns a list for each "dish"
            //we are accessing the prop dishes that was defined in the app component (leveraging a state)
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <RenderMenuItem dish={dish}/> 
                
                </div> //when the card is clicked, the onDishSelect function is called
            ); //the key feature allows React to identify each element uniquely and display them accordingly (you want the key to be unique for each element)
            //li specifies each item will be rendered as a list
            //m-1 sets a margin of 1 to all 4 sides
            

            //Update:
            //now, when the card is clicked, the onClick function from the MainComponent that was a prop is called, and this sets the dish id of the card so that it can be rendered in dishdetail
            //the onClick that was sent in by the Main component is the one called via props
            //the this is removed because in the case of function compnents it's a parameter (not accessed via the constructor)

        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    
                    </div>
                
                </div>
                <div className="row">
                    {menu}
                </div>
                
                
            </div>
    
        ); //renders the card of the the image that is clicked on the screen below the initial cards
            //the container class makes it possible to align the items into a row

        


    }

   

        
    



export default Menu; //allows us to import this component in other files