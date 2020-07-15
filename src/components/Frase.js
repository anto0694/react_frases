import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:500px;
    max-height:200px;

    
    @media (min-width: 992px) {
        margin-top: 15rem;
    }
    h3 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;


const Frase = ({frase}) => {

    //Extraer valores
    const {quote,author}=frase;

    if(Object.keys(frase).length===0) return null; //Con esto sabemos si el objeto tiene llaves 
    return (
        <ContenedorFrase>
            <h3>{quote}</h3>
            <p>-{author}</p>
        </ContenedorFrase>
      );
}
 
export default Frase;