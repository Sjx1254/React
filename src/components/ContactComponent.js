import React, {Component} from 'react'; //controlled forms are only possible with class components
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback} from 'reactstrap'
import { Link } from 'react-router-dom'

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: { //tracks when each field has been touched or not (changed state) to signal the start of form validation
                firstname: false,
                lastname: false,
                telnum: false,
                email: false

            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleInputChange(event) { //when this is invoked, the information for the input is retrieved. The names for each target are the corresponding state variables, which are changed based on the value/checked inputs. 
                                //This makes it so that the change in state is shown as you type the inputs
                                
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;

        this.setState({
            [name]: value
        })


    }

    handleSubmit(event) { //the preventDefault prevents the button from taking you to another page, otherwise in this case an alsert is shown displaying the current state of the component
        console.log("Current State is: " + JSON.stringify(this.state))
        alert("Current State is: " + JSON.stringify(this.state))
        event.preventDefault();

    }

    handleBlur = (field) => (evt) => { //evt is needed here as the "event" is the field being touched...otherwise the program will crash
        this.setState({
            touched: { ...this.state.touched, [field]: true} //... means that all the other fields will remain unchanged
                                                             //Make sure to surround the state variable in []
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',

        };

        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';
        
        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';
        
        const reg = /^\d+$/; //all characters in the string should be numbers

        if (this.state.touched.telnum && !reg.test(telnum)) //tests to see if the string has all numbers
            errors.telnum = 'Tel. Number should contain only numbers';
        
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)  //makes a new array with @ symbols and checks if the length of that is only 1
            errors.email = 'Email should contain a @'
        
        return errors;
    }   
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email) //call the validate function and create the errors array here
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row> 
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname} </FormFeedback> 

                                </Col>
                                
                            
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="firstname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname} </FormFeedback>

                                </Col>
                                
                            
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum} </FormFeedback>

                                </Col>
                                
                            
                            </FormGroup>
                            <FormGroup row> 
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email} </FormFeedback>

                                </Col>
                                
                            
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked = {this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}} >
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>

                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row> 
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />

                                </Col>
                                
                            
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}} >
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    
                                    </Button>
                                
                                </Col>
                            </FormGroup>
                        
                        </Form>
                    
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

        );

    }
    
}

export default Contact;