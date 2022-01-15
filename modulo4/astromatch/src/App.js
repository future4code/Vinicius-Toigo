import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled, {createGlobalStyle} from 'styled-components'
import PageHome from './pages/PageHome'
import PageMatch from './pages/PageMatch'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }
`


const IrParaMatches=styled.button`
display:flex;
flex-direction:column;
align-items: center;

`


export default function App(){
  const [currentPage, setCurrentPage] = useState('PageHome')

  
  const changePage = () => {
    currentPage === 'PageHome'? setCurrentPage('PageMatch') : setCurrentPage('PageHome')
  }
  const cleanMatch = () => {
   
    axios
    .put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-lussani/clear"
    )
    .then((res) => {
      alert(`Os seus matches foram limpos com ${res.data.message}o.`);
    });
  }
  return(
  <div>
    <GlobalStyle/>
  
    {currentPage ==='PageHome'?<PageHome/> : <PageMatch/>}
    <IrParaMatches onClick={changePage}>{currentPage === 'PageHome'? 'Ir para Matches' : 'Ir para Início'}</IrParaMatches>
   
    <button onClick={cleanMatch}>Limpar Matches</button>
  </div>
  )
}