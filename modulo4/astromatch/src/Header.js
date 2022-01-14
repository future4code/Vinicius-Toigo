import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

import { createGlobalStyle } from "styled-components";




function Header(){
    
const HeaderEstilizado=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
border-bottom:1px solid #f9f9f9;
padding-left:15%;
padding-right:15%;

`  


     return (

<HeaderEstilizado>

        <AccountCircleIcon/> 
        <h2>AstroMatch</h2>
        <MessageIcon/>
      
        

</HeaderEstilizado>

    )

}

export default Header