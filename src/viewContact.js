import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const ViewContact = ({contactId, contacts}) => {
    const contact = _.find(contacts, {id: contactId });

    if (!contact) {
      return <div>Sorry, but the contact you are searching for was not found</div>;
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>{contact.name}</th>
              <th>{contact.email}</th>
              <th>{contact.phone}</th>
              <th>{contact.photo}</th>
            </tr>
          </thead>
          </table> 
          <Link to="/contactList">Back</Link>
          </div>
    )
  }
  
  export default ViewContact
     
    