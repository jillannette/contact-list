import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import ButtonRedirect from './ButtonRedirect';

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



  //  const onClick = ({ history }) => {
  //   const redirect = () => {
  //     history.push('/ViewContact');
  //   }

  //   return (
  //     <div>
        
  //       <button onClick={ButtonRedirect}>View Contact </button>
  //     </div>
  //   )
  //  }
     
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