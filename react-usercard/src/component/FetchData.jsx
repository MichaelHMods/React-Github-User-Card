import React from 'react';

import axios from 'axios';

import DataCard from './DataCard';

class FetchData extends React.Component{
    state = {
        userName: '',
        gitHandle: '',
        followers: ''
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
                //followers: 
            });
        })
        .catch(err => console.log(err))
};

componentDidUpdate {
    axios
    .get('https://api.github.com/users/MichaelHMods')
    .then(res => {
        console.log('this is res', res)
        this.setState({
            userName: res.data.name,
            gitHandle: res.data.login,
            //followers: 
        });
    })
    .catch(err => console.log(err))
    }

render() {
    return(
        <div className="container">
            <DataCard userName={this.state.userName} gitHandle={this.state.gitHandle} />
        </div>

    )
}
};


export default FetchData;