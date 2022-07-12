import { Switch, Route } from 'react-router-dom'
import ViewContact from './viewContact'
import FullContactList from './FullContactList'

const ContactList = ({contacts, addContact}) => (
    <Switch>
      <Route path='/contactList/new' render={(routerProps) => (
        <ViewContact history={routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>

      <Route path='/contactList/:id' render={(routerProps) => (
        <ViewContact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
      )}/>

      <Route path='/contactList' render={() => (
        <FullContactList contacts={contacts} />
      )}/>
      
    </Switch>
  )
   
  export default ContactList