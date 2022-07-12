import { Link } from 'react-router-dom'
import React from 'react'

const addContact = (props) => {
    return (
      <div>
        <form>
            <label>Name</label>
        </form>
      </div>
    
    )
}



const handleAddContactChange = (event) => {
  event.preventDefault();
    return (
        
       <><h2>Add New Contact</h2><form>
            <input
                type="text"
                name="name"
                required="required"
                placeholder="Name" />
                onChange={handleAddContactChange}
            <input
                type="email"
                name="email"
                required="required"
                placeholder="Email" />
                onChange={handleAddContactChange}
            <input
                type="text"
                name="phone"
                required="required"
                placeholder="Phone Number" />
                onChange={handleAddContactChange}
            <input
                type="img"
                name="image"
                required="required"
                placeholder="image url" />
                onChange={handleAddContactChange}
            <button type="submit">Add Contact</button>

        </form><div /></>
    );
    ;

const [addContact, setAddContact] = useState({
  name: '',
  email: '',
  phone: '',
  image: '',
})


  const fieldName = event.target.getAttribute('id');
  const fieldValue = event.target.value;

  const newContactData = {...addContact};
  newContactData[fieldName] = fieldValue;

  setAddContactData(newContactData)

}

 const AddContact = (contact) => {
  setContacts(contacts => {
    return [...contacts, contacts]
  })
}

