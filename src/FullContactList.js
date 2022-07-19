import { Link } from 'react-router-dom'


const FullContactList = ({contacts}) => (
  <div>
     <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contactList/${c.id}`}>{c.name}{c.email}{c.phone}{c.image}</Link>
          </li>
        ))
      }
     </ul>
  </div>
)

  export default FullContactList

  