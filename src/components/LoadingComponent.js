import React from 'react';

export const Loading = () => { //loading icon for whenever the dishes need to be loaded
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span> 
            <p>Loading...</p>

        </div> //this rotates the font awesome icon (fa pulse) sets it to 3x the container, and sets it to the fixed width of the container
    )
}