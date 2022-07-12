import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderMenuItem({dish, onClick }) { //this will now display the card for the passed in dish that is clicked
        return (
            
                <Card onClick={() => onClick(dish.id)}>  
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                </Card>
                    
                    
           //when the card is clicked, the onDishSelect function is called
        ); //the key feature allows React to identify each element uniquely and display them accordingly (you want the key to be unique for each element)
        //li specifies each item will be rendered as a list
        //m-1 sets a margin of 1 to all 4 sides

        //Update:
        //now, when the card is clicked, the onClick function from the MainComponent that was a prop is called, and this sets the dish id of the card so that it can be rendered in dishdetail


    }

    const Menu = (props) => { //props is the parameter that is passed in
        const menu = props.dishes.map((dish) => {  //map iterates over each item in the list, and returns a list for each "dish"
            //we are accessing the prop dishes that was defined in the app component (leveraging a state)
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <RenderMenuItem dish={dish} onClick={props.onClick} /> 
                
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
                    {menu}
                </div>
                
                
            </div>
    
        ); //renders the card of the the image that is clicked on the screen below the initial cards
            //the container class makes it possible to align the items into a row

        


    }

   

        
    



export default Menu; //allows us to import this component in other files