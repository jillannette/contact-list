import React from 'react';
import styled from 'styled-components'

const Button = styled.button
  `position: flex;
   background-color: #aed581;
   padding: 5px 15px;
   border-radius: 5px;
   box-shadow: 0px 2px 2px lightgray;`


function clickButton(){
  alert('You clicked me');
}
      
const Home = () => (
    <><div>
            <h1>Contact List</h1>
        </div>
        
        <Button onClick={clickButton}>
           Add New Contact
      </Button></>
    )

  export default Home

 

 


              




