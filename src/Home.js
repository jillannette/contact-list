import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import FullContactList from './FullContactList';
import styled from 'styled-components'
import './App.css'

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

  const ContactList = ({contacts, addContact}) => (
    <Switch>
      <Route path='/home/addContact' render={(routerProps) => (
        <AddContact history={routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>

      <Route path='/home/:id' render={(routerProps) => (
        <ViewContact contactId={parseInt(routerProps.match.params.id, 9053242)} contacts={contacts} />
      )}/>

      <Route path='/contactList' render={() => (
        <FullContactList contacts={contacts} />
      )}/>
      
    </Switch>
  )

  const Button = styled.button
  `position: flex;
   background-color: #B2C8DF;
   padding: 5px 15px;
   border-radius: 5px;
   box-shadow: 0px 2px 2px lightgray;`

   function onClick(){
    <Link to='/AddContact'>Add New Contact</Link>
    
    return (
      <Link to='/addContact'>Add New Contact</Link>
    )
     
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
                <td><button>View Contact</button></td>
                <td>{contacts.name}</td>
                <td>{contacts.email}</td>
                <td>{contacts.phone}</td>
              </tr>
            );
          })}

        </table>
      </div><Button onClick={onClick}>
          Add New Contact
        </Button></>
    );

      }
    

  
   
  export default Home
