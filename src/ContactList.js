import { Switch, Route } from 'react-router-dom'
import ViewContact from './ViewContact'
import AddContact from './AddContact'
import FullContactList from './FullContactList'

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
   
  export default ContactList