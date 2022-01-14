import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { createGlobalStyle } from "styled-components";


const PageHomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PageHomeProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45vw;
    border: 1px solid black;
    padding: 25px;
    margin: 2.5%;
    button {
        height:5vh;
        width: 5vw;
    }
`
const PageHomeImg = styled.img`
    width: 25vw;
    height:50vh;
`


   export default function Matches() {

   
    const [currentProfile, setCurrentProfile] = useState({});


    const getProfile = () => {
    axios
    .get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-lussani/person')  
    .then(res => {setProfile(res.data.profile)})
    .catch(err => {alert(err.response.data.message)})
    }

    const choosePerson = (choice) => {

        const body = {id: profile.id,choice: choice}

        setProfile(undefined)
        axios
          .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-lussani/choose-person",
            body
          )
          .then((res) => {
            getProfileToChoose()
          })
  }


  useEffect(()=> {getProfileToChoose()}, [])

  return (
  <div>
      <PageHomeDiv>
        
          {profile?
          <PageHomeProfile>
              <PageHomeImg src={profile.photo}/>
              <h2>{profile.name}, {profile.age} anos</h2>
              <p>{profile.bio}</p>
              <div>
                  <button onClick={()=>choosePerson(false)}>❌</button>
                  <button onClick={()=>choosePerson(true)}>💘</button>
              </div>
          </PageHomeProfile>
          : <div>Loading rápido?</div>}
      </PageHomeDiv>
  </div>
  )
}
        
    
   




    
    