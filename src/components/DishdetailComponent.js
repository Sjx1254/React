import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        
        
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                </div>
            )
        }

        else {
            return (
                <div></div>
            )
        }

    }

    renderComments(dishComments) {
        if (dishComments != null) {
            const comment = dishComments.map((c) => {
                return(
                    <li key = {c.id}>
                        <p>{c.comment}</p>
                        <p>--{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p> 
                    </li> //presenting the date using reacts date time format
                )
            });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>
            )
        }

        return(
            <div></div>
        )
    }

    render() {
        const selectedDish = this.props.dish
        if(selectedDish == null) {
            return(
                <div></div>
            )
        }

        return (

            <div className="container">
                <div className="row">
                    {this.renderDish(selectedDish)}
                    {this.renderComments(selectedDish.comments)}
                </div>
                
            </div>
        )
    }

}



export default DishDetail;