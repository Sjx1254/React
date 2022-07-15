import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, Button, ModalHeader, ModalBody, Label,
FormGroup, Input, Form} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false //tracks whether the modal is open or not
        }

        this.toggleNav = this.toggleNav.bind(this); //this basically says that this.toggleNav will point to the function below, just so it can recognize the state of the component when it is called in JSX
        
        this.toggleModal = this.toggleModal.bind(this); //With an arrow function you don't need to use this (simply do () => this.functionName() instead)

        this.handleLogin = this.handleLogin.bind(this)

        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })

    }

    toggleModal() { //toggler that opens and closes the modal 
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }

    handleLogin(event) {
        this.toggleModal()
        alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked) //we are extracting the values of each of these variables from the DOM (the checkbox has the boolean check as its toggler)
        event.preventDefault()
        
    }
    render() {
        return(
            <>
                <Navbar dark expand="md">  
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} /> 
                        <NavbarBrand className="mr-auto" href="/"> 
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="ristorante Con Fusion"/>
                        </NavbarBrand> 
                        <Collapse isOpen={this.state.isNavOpen} navbar> 
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>Login
                                    </Button>
                                
                                </NavItem>
                            
                            </Nav>
                        </Collapse> 
                    </div>
                </Navbar> 
                <div className = "jumbotron"> 
                    <div className="container">
                        <div className = "row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con Fusion </h1>
                                <p> We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary </p>
                            </div>

                        </div>
                    
                    </div>
                </div> 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="passowrd">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                            
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                                    Remember Me
                                
                                </Label>
                            
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </> 
            //Expand basically means that the entire navbar will be shown only for medium and large screen sizes
            //can group multiple elements together and returns them, doesn't take up an extra node for the elements (div) [can insert them directly]           
        ); //jumbotron is a grey box that is used to display some important content with more attention
        //the navbar will only be expanded from medium to large screens
        //The collapse will open based on the boolean variable isOpen which changes based on the state variable isNavOpen
        //NavbarToggler is a button which is resposible for changing the isNavOpen state (through a function toggleNav)

        //Uncontrolled forms:
            //the innerRef will match the input typed in to the corresponding element (you can name it anything for accessing) in the DOM using 'this
            //nav is used to style the navbar appropriately
            //htmlFor binds the label to the corresponding input box
    }
}

export default Header;