import { Link } from 'react-router-dom'
import React from 'react'
import Form from 'react-bootstrap/Form'
import ButtonRedirect from './ButtonRedirect'
import Home from './Home'


const AddContact = (props) => {
   
    
        return (
            <><div className="add-title">
            <h2>Add a New Contact</h2>
            </div>
          <Form className="add-form">
            
              <Form.Group className="mb-3" controlId="Form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Bob Jones" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="bobjones@email.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.Phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="555-555-5555" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.Image_Url">
                <Form.Label>Image Url</Form.Label>
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
           };

  class newContact extends React.Component {
    constructor () {
      super () 

      this.state = {
        name: '',
        email: '',
        phone: ''
      }

      this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }

    handleSubmitContactClick () {
      const newContact = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      };

      this.props.addContact(newContact)
      this.props.history.push('/')
    }
  }

       
 
export default AddContact