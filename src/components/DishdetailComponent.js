import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, ModalHeader, Modal, ModalBody, Label, Col, Row, Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import {Control, LocalForm, Errors} from 'react-redux-form'


    const maxLength = (len) => (val) => !(val) || val.length < len
    const minLength = (len) => (val) => (val) && val.length >= len

    class CommentForm extends Component {
        constructor(props) {
            super(props)
        

            this.state = {
                isModelOpen: false
            }

            this.toggleModal = this.toggleModal.bind(this)

        }

        toggleModal() {
            this.setState({
                isModelOpen: !this.state.isModelOpen

            })
        }

        

        render() {
            return(
                <React.Fragment>
                    <div className = "container">
                        <div className = "col-12">
                            <Button outline onClick = {this.toggleModal} className>
                                <span className="fa fa-pencil fa-lg"></span>Submit Comment
                            </Button>
                        
                        </div>
                    
                    </div>
                    <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                        <ModalHeader isOpen={this.state.isModelOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12">
                                <LocalForm>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" name="rating" 
                                                className="container"
                                                >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            
                                            </Control.select>

                                            
                                        
                                        </Col>
                                    
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="name" md={12}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".name" id="name" name="name"
                                                className="form-control"
                                                validators={{
                                                    minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                            
                                            />

                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less',
                                                   

                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control"
                                                
                                            
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        
                                            <Button type="submit" color="primary" className="ml-3">
                                            Submit</Button>
                                        
                                    </Row>
                                
                                </LocalForm>
                            </div>
                        
                        </ModalBody>
                    
                    </Modal>
            

                </React.Fragment>
            )
        }

        
    }

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
                <span className="col-12 col-md-5 m-1">
                    
                    <h4>Comments</h4>
                    {comment}

                    <CommentForm />
                    
                </span>
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
