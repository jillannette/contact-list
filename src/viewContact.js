import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ContactList from './ContactList';

const ViewContact = (props) => {
    return (
    <>
      <Card className="contact-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card border="primary" style={{ width: '18rem' }}></Card>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email Address</ListGroup.Item>
        <ListGroup.Item>Phone Number</ListGroup.Item>
        </ListGroup>
      <Card.Body>
        <Card.Link href='/'>Back to Contact List</Card.Link>
      </Card.Body>
    </Card>
  </>
   )

   }  
 


 

        
        export default ViewContact