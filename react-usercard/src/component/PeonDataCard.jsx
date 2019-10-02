import React from 'react';



function PeonDataCard(props) {
    console.log('PeonCard props',props);
    return(
  
    <div className="peonCard">
       <div className="peonCardContainer">
            <div className="peonCardImg">
                <img src={props.item.avatar_url} alt=""/>
            </div>
            
            <h4>Github Handle: {props.item.login} </h4>
        
       </div>
        
    
    
        

        
    </div>
    )
}






export default PeonDataCard;