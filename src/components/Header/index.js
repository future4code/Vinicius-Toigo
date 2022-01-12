import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:orange
`

const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    
`
const ButtonEstilizado=styled.button`
border-radius:20px;
background-color:white;
border: 4px solid black;
cursor:pointer;
button-hover:grey;
`


const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>

                <ButtonEstilizado onClick={() => props.changePage("playlistCreationPage")} >Criar Playlist</ButtonEstilizado>
                <ButtonEstilizado onClick={() => props.changePage("playlistManagerPage")} >Lista de Playlists</ButtonEstilizado>

            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header