
import Header from './Header';
import Matches from './components/Matches';
import Home from './components/Home';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios'
import React, {useEffect, useState} from 'react'

const CardContainer = styled.div`
width: 100vw;
height: 90vh;
object-fit: contain;

`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }
`

export default function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  const changePage = () => {
    currentPage === 'Home'? setCurrentPage('Matches') : setCurrentPage('Home')
  }
 
  const cleanMatch = () => {
  
    axios
    .put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-lussani/clear/"
    )
    .then((res) => {
      alert(`Os seus matches foram resetados com ${res.data.message}o.`);
    });
  }

  return (

    <div>
     <Header/>
    <CardContainer/>
    
    {currentPage ==='Home'?<PageHome/> : <PageMatch/>}
    <button onClick={changePage}>{currentPage === 'Home'? 'Ir para Matches' : 'Ir para Início'}</button>
    
    <button onClick={cleanMatch}>Adeus as paqueras!</button>

  </div>
  )
}