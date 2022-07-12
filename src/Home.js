import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const contacts = [
  {  
      "id": 1234567,
      "name": "Brene Brown",
      "email": "bbrown@risingstrong.com",
      "phone": "111-111-1111"
    },
    {  
      "id": 9053242,
      "name": "Richard Powers",
      "email": "rpowers@theoverstory.com",
      "phone": "222-222-2222"
    },
    {  
      "id": 12345678,
      "name": "Ann Lamott",
      "email": "alamott@hallelujiananyway.com",
      "phone": "333-333-3333"
    }
  ]  

  const Button = styled.button
  `position: flex;
   background-color: #B2C8DF;
   padding: 5px 15px;
   border-radius: 5px;
   box-shadow: 0px 2px 2px lightgray;`

   function clickButton(){
    alert('You clicked me')
  }
  


        
function Home() {
  <div>
    
    <h1>Contact List</h1>
  </div>



    return (
    <><div className="app-container">
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {contacts.map((contacts, key) => {
            return (
              <tr key={key}>
                <td>{contacts.photo}</td>
                <td>{contacts.name}</td>
                <td>{contacts.email}</td>
                <td>{contacts.phone}</td>
              </tr>
            );
          })}

        </table>
      </div><Button onClick={clickButton}>
          Add New Contact
        </Button></>
    );

    
      }

  
   
  export default Home
