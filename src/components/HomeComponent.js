import { childElements } from 'dom-helpers';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from './LoadingComponent'

function RenderCard({item, isLoading, errMess}) { 

    if (isLoading) {
        return(
            <Loading />
        )
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null} 
                    <CardText>{item.description}</CardText>
                </CardBody>
            
            </Card>

        );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} /> 
                
                </div> 
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                
                </div>
            
            </div> 
        
        </div> //for the dish, as it state had been set in dishes.js, the isloading and errMess parameters are set to the props passed in my main component (haven't done anything for the other two yet)

    );
} //you use braces in functional parameters to make working with props easier (object destructuring)
  //The js code is available through JSX and checks if the prop has an item designation component; if not, return NULL

export default Home;