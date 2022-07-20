import { Link } from 'react-router-dom'
import React from 'react'
import Form from 'react-bootstrap/Form'
import ButtonRedirect from './ButtonRedirect'
import Home from './Home'


const AddContact = (contact) => {
   
    
        return (
            <><div className="add-title">
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

            <div className="add-button">
      <Link to="/">
         <button onClick={ButtonRedirect}>Submit</button>
      </Link>
        </div>
            </>
        )
           }

       
 
export default AddContact