import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom'

    function RenderDish({dish}) { //these are now props so they are objects (why they are enclosed in curly braces) (if you know what you're specifying)
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

    function RenderComments({comments}) {
        if (comments != null) {
            const comment = comments.map((c) => {
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
        );
    }

    const DishDetail = (props) => {
        console.log('Dishdetail component render invoked')
        const selectedDish = props.dish
        if(selectedDish == null) {
            return(
                <div></div>
            )
        }

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
               
                    <RenderDish dish={props.dish} />
                
                
                    <RenderComments comments={props.comments} />
                
            </div>
            </div>
        );
    }

    //SFA part 2
        //As the comments are now a separate array/file instead of being a part of dish, this can now be changed to props.comments





export default DishDetail;
