import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this); //this basically says that this.toggleNav will point to the function below, just so it can recognize the state of the component when it is called in JSX
                                                    //With an arrow function you don't need to use this (simply do () => this.functionName() instead)

        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })

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
            </> 
            //Expand basically means that the entire navbar will be shown only for medium and large screen sizes
            //can group multiple elements together and returns them, doesn't take up an extra node for the elements (div) [can insert them directly]           
        ); //jumbotron is a grey box that is used to display some important content with more attention
        //the navbar will only be expanded from medium to large screens
        //The collapse will open based on the boolean variable isOpen which changes based on the state variable isNavOpen
        //NavbarToggler is a button which is resposible for changing the isNavOpen state (through a function toggleNav)
    }
}

export default Header;