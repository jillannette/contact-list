import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import ContactList from './ContactList'
import data from './mock-data.json'
import ViewContact from './viewContact'


const App = () => {
  const [contacts, setContacts] = useState(data)

   const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contacts]
    })
  }

return (
    <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contactList" render={() => (
      <ContactList addContact={addContact} contacts={contacts} />
    )} />
    <Route path="/viewContact" component={ViewContact} />
  </Switch>
  </div>
  )
    }


export default App