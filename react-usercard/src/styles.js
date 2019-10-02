import styled from 'styled-components';

const App = styled.div `
    background-color: #c8c8c8;
    width: 100%;
`

const MainDC = styled.div `
    margin-left: 37.5%;
    margin-top: 1%;
    margin-right 37.5%;
    background-color: #FA9664;
    border: 3px solid grey;
    border-radius: 10%;
    text-align: center;
`

const TextDC = styled.div `
    justify-content
`


const DCImg = styled.img `
    width: 90%;
    margin:7% 5% 5% 5%;
    border-radius: 10%;

`

const PCard = styled.div `
    width: 100%;
    border-radius: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`

const PCContainer = styled.div `
    background-color: #FA9664;
    border: 2px solid grey;
    border-radius: 10%;
    margin: 3%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;


`
const PCImg = styled.img `
    width: 90%;
    border-radius: 10%;
    margin:7% 5% 5% 5%;

`


export {App,PCContainer, PCImg, PCard, DCImg, MainDC, TextDC }