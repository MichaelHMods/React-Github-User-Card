import React from 'react';
import { PCContainer, PCImg } from '../../src/styles';



function PeonDataCard(props) {
    console.log('PeonCard props',props);
    return(
  
    
       <PCContainer>
            <div className="peonCardImg">
                <PCImg src={props.item.avatar_url} alt={props.item.login}  />
            </div>
            
            <h4>Github Handle: {props.item.login} </h4>
        
       </PCContainer>
        
    
    
        

        
    
    )
}






export default PeonDataCard;