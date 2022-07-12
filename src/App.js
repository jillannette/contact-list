import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import ContactList from './ContactList'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import FullContactList from './FullContactList'


const App = () => {
   const [contacts, setContacts] = useState([
    {  
      "id": 1234567,
      "name": "Brene Brown",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/220px-Bren%C3%A9_Brown_Wikipedia.jpg", 
      "email": "bbrown@risingstrong.com",
      "phone_number": "111-111-1111"
    },
    {  
      "id": 9053242,
      "name": "Richard Powers",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Richard_Powers_%28author%29.jpg/220px-Richard_Powers_%28author%29.jpg",
      "email": "rpowers@theoverstory.com",
      "phone_number": "222-222-2222"
    },
    {  
      "id": 12345678,
      "name": "Ann Lamott",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Anne-Lamott-2013-San-Francisco_%28cropped%29.jpg/220px-Anne-Lamott-2013-San-Francisco_%28cropped%29.jpg",
      "email": "alamott@hallelujiananyway.com",
      "phone_number": "333-333-3333"
    }
    ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }
    
return (
    <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contactList" render={() => (
      <ContactList addContact={addContact} contacts={contacts} />
    )} />
    <Route path="/ViewContact" component={ViewContact} />
    <Route path="/AddContact" component={AddContact} />
  </Switch>
  </div>
  )
    }


export default App
