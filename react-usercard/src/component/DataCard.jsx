import React from 'react';



function DataCard(props) {
    console.log('this is props',props);
    return(
    <>
    <div className="mainCard">
        <div className="dCImg">
            <img src={props.img} alt={props.userName} className="dataCardImg"/>
        </div>
        <h1>{props.userName} </h1>

        <h4>GitHub: {props.gitHandle} </h4>
    </div>
    </>
    )
}






export default DataCard;