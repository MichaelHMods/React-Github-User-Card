import React from 'react';

import axios from 'axios';

import DataCard from './DataCard';
import PeonDataCard from './PeonDataCard';

// styles
import {PCard} from '../styles';

class FetchData extends React.Component{
    state = {
        userName: '',
        gitHandle: '',
        img:'',
        followers: [{}]
    };


//useEffect
componentDidMount() {
    axios
        .get('https://api.github.com/users/MichaelHMods')
        .then(res => {
            console.log('this is res', res)
            this.setState({
                userName: res.data.name,
                gitHandle: res.data.login,
                img: res.data.avatar_url,
                //followers: 
            });
        },[])
        .catch(err => console.log(err))



    axios
    .get('https://api.github.com/users/MichaelHMods/followers')
    .then(res => {
        console.log('this is 2nd axios ', res.data)
        this.setState({
        followers: res.data
        });
    },[])
    .catch(err => console.log(err))
};
    

render() {
    return(
        <div className="container">
            <DataCard userName={this.state.userName} gitHandle={this.state.gitHandle} img={this.state.img} />
            <PCard>
            {this.state.followers.map((item, i) => <PeonDataCard item={item} key={i}/>)}
            </PCard>
        </div>

    )
}
};


export default FetchData;