import React, {Component} from 'react'; //controlled forms are only possible with class components
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors} from 'react-redux-form'

class Contact extends Component {

    constructor(props) {
        super(props);

        

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(values) { //the preventDefault prevents the button from taking you to another page, otherwise in this case an alsert is shown displaying the current state of the component
        console.log("Current State is: " + JSON.stringify(values))
        alert("Current State is: " + JSON.stringify(values))

    }
  
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    
                    </div>
                    
                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send us Your Feedback</h3>
                    
                    </div>

                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group"> 
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                    />

                                </Col>
                                
                            
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        />

                                </Col>
                                
                            
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control" />
                                        

                                </Col>
                                
                            
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />

                                </Col>
                                
                            
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}} >
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}} >
                                    <Control.select model=".contactType" name="contactType">
                                        
            

                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>

                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className='form-control' />

                                </Col>
                                
                            
                           </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}} >
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    
                                    </Button>
                                
                                </Col>
                            </Row>
                        
                        </LocalForm>
                    
                    </div>
                
                </div>
            </div> 
            //Forms:
                //row is put to enable bootstraps grid on the current form row
                //Col and md are the reactstrap equivalents of div = col-md
                //The first name labels and subsequent labels will occupy 2 columns
                //we are changing the state of value each time the user interacts (controlled form)
                //onChange and onSubmit are the eventHandlers use to invoke the handleInput/handleSubmit functions
                //The bind function is needed is to link the this.handleInput to the action function to where the state wil be changed
                //The valid/invalid change the text outline to green/red, respecitvely
                //onBlur is used to invoke the handleBlur (when a part of the form is first touched)
            
            //Redux form:
                //We now use the Control.(type of input) to set the type of input for the specific row of the form
                //There is no need for any input change/blur handlers since redux does that for us
                //redux also puts the values entered into the form once submit is clicked (through the onSubmit event handler) into the store and displays them once handleSubmit is called(they're entered as one overall state into the store)
                //form-control/form-check-input styles the places where you need to enter the input

        );

    }
    
}

export default Contact;