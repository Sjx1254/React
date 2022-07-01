import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = { //stores properties for the component that can be used
            selectedDish: null
           
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>

            );

        }
        else {
            return(
                <div></div>
            );
        }

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish}); //setting the selectedDish to the dish that is clicked on
    }

    render() { //returns view/display for component
        const menu = this.props.dishes.map((dish) => {  //map iterates over each item in the list, and returns a list for each "dish"
                                                        //we are accessing the prop dishes that was defined in the app component (leveraging a state)
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card onClick={() => this.onDishSelect(dish)}> 
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                        
                        
                </div> //when the card is clicked, the onDishSelect function is called
            ); //the key feature allows React to identify each element uniquely and display them accordingly (you want the key to be unique for each element)
            //li specifies each item will be rendered as a list
            //m-1 sets a margin of 1 to all 4 sides

        })

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        ); //renders the card of the the image that is clicked on the screen below the initial cards

    }

}

export default Menu; //allows us to import this component in other files