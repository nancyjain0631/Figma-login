import React from 'react';
import styled from "styled-components";
const main = () => {
    return (
       <Container>
           <h1>Join The <br/>Team</h1>
       </Container>
            
        
    );
};
const Container= styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    h1{
        font-size:45px;
        font-weight:900;
        font-size: 65px;
        color:#343434;
        /* line-height: px; */
        @media(max-width: 900px){
            display:none;
        }
    }
`;
export default main;


