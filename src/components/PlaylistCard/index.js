import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
    font-size:25px;
`

const DeleteButton = styled.p`
    color: red;
    cursor:pointer;
`

const ButtonEstilizado2=styled.button`
border-radius:20px;
background-color:white;
border: 4px solid black;
cursor:pointer;
box-shadow: 0px 2px 2px lightgrey;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <ButtonEstilizado2 onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</ButtonEstilizado2>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >X</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard