import React, {Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap'; //These are imported from ReactStrap - (reconfigures some implementations and features of bootstrap to provide prebuilt components)

class Header extends Component {
    render() {
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand> 
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
            </> //can group multiple elements together and returns them, doesn't take up an extra node for the elements (div) [can insert them directly]           
        ); //jumbotron is a grey box that is used to display some important content with more attention
    }
}

export default Header;