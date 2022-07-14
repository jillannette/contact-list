import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import ButtonRedirect from './ButtonRedirect';

import './App.css'

const navBar = () => {
  <>
  <ul className="nav-bar">
    <li>
      <a href='/addContact'>Add Contact</a>
    </li>
    <li>
      <a href='/'>View Contact</a>
    </li>
  </ul>
  </>
}

const contacts = [
   {  
      "id": 1234567,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/800px-Bren%C3%A9_Brown_Wikipedia.jpg",
      "name": "Brene Brown",
      "email": "bbrown@risingstrong.com",
      "phone": "111-111-1111"
    },
    {  
      "id": 9053242,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/800px-Bren%C3%A9_Brown_Wikipedia.jpg",
       "name": "Richard Powers",
      "email": "rpowers@theoverstory.com",
      "phone": "222-222-2222"
    },
    {  
      "id": 12345678,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Anne-Lamott-2013-San-Francisco_%28cropped%29.jpg/800px-Anne-Lamott-2013-San-Francisco_%28cropped%29.jpg",
      "name": "Ann Lamott",
      "email": "alamott@hallelujiananyway.com",
      "phone": "333-333-3333"
    }
  ]  

  // const ContactList = ({contacts, addContact}) => (
  //   <Switch>
  //     <Route path='/home/addContact' render={(routerProps) => (
  //       <AddContact history={routerProps.history} contacts={contacts} addContact={addContact} />
  //     )}/>

  //     <Route path='/home/:id' render={(routerProps) => (
  //       <ViewContact contactId={parseInt(routerProps.match.params.id, 9053242)} contacts={contacts} />
  //     )}/>

  //     <Route path='/contactList' render={() => (
  //       <FullContactList contacts={contacts} />
  //     )}/>
      
  //   </Switch>
  // )
       
function Home() {

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
                <td><Link to="/ViewContact">
                <button>View Contact</button>
                  </Link></td>
                <td>{contacts.name}</td>
                <td>{contacts.email}</td>
                <td>{contacts.phone}</td>
              </tr>
            );
          })}

        </table>
      </div>
      <div>
      <Link to="/AddContact">
        
        <button onClick={ButtonRedirect}>Add a New Contact</button>
      </Link>
        </div>
        </>
        
      
    );

      }
 

  export default Home
