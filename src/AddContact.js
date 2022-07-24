import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'



const AddContact = () => {

  const [contact, setContact] = useState({id: 1, name: 'Brene Brown', email: 'bbrown@risingstrong.org', phone: '111-111-1111', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/399px-Bren%C3%A9_Brown_Wikipedia.jpg" })
  id = contact.id
  const name = contact.name
  const email = contact.email
  const phone = contact.phone
  const image = contact.image

  function addToList () {
    setContact(prevContact => {
      return {...prevContact, newContact}
    })
  }

 

  return (
    
      <>
      <div className="add-title">
        <h2>Add a New Contact</h2>
      </div>

      <Form className="add-form">
        <Form.Group className="mb-3" controlId="Form.Name">
          <Form.Label>{contact.name}</Form.Label>
          <Form.Control type="text" placeholder="Bob Jones" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.Email">
          <Form.Label>{contact.email}</Form.Label>
          <Form.Control type="email" placeholder="bobjones@email.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.Phone">
          <Form.Label>{contact.phone}</Form.Label>
          <Form.Control type="text" placeholder="555-555-5555" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="Form.Image_Url">
          <Form.Label>{contact.image}</Form.Label>
          <Form.Control type="text" placeholder="https://picsum.photos/200" />
        </Form.Group>
      </Form>
            <div/>

                 
        
            </>
        )
           }

       
 
export default AddContact