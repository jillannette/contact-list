import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const ViewContact = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/220px-Bren%C3%A9_Brown_Wikipedia.jpg",
  name: '',
  email: '',
  phone: ''
}

    function ContactCard(props) {
      return (
        <Card style={{ width: '18rem'}}>
          <Card.Img variant='top' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/220px-Bren%C3%A9_Brown_Wikipedia.jpg" />
        <Card.Body>
        <Card.Title>{props.contact.name}</Card.Title>
        <Card.Text>
          <h2>{props.contact.email}</h2>
          <h2>{props.contact.phone}</h2>
        </Card.Text>
        <Button variant="primary">Back to Contact List</Button>
        </Card.Body>
        </Card>
      );
    }

   

    


  
  export default ViewContact
     
    