import React from 'react';

//styles
import { DCImg, MainDC, TextDC } from '../styles';



function DataCard(props) {
    console.log('this is props',props);
    return(
    <>
    <MainDC>
        <div className="dCImg">
            <DCImg src={props.img} alt={props.userName} className="dataCardImg"/>
        </div>
        <TextDC>
            <h1>{props.userName} </h1>
            <h4>GitHub: {props.gitHandle} </h4>
        </TextDC>
    </MainDC>
    </>
    )
}






export default DataCard;