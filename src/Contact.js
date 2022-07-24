import React, { useState, useEffect } from 'react'

export default function Contact() {

  const initialContact = 
    {
      name: "Brene Brown",
      email: "bbrown@risingstrong.org",
      phone: 111-111-1111,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bren%C3%A9_Brown_Wikipedia.jpg/330px-Bren%C3%A9_Brown_Wikipedia.jpg",
    }

    const [contact, setContact] = useState(initialContact);

    return(

    <Card className="contact-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={contact.image} />
      <Card border="primary" style={{ width: '18rem' }}></Card>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{contact.email}</ListGroup.Item>
        <ListGroup.Item>{contact.phone}</ListGroup.Item>
        </ListGroup>
      <Card.Body>
        <Card.Link href='/'>Back to Contact List</Card.Link>
      </Card.Body>
    </Card>
    )
  
       
  
}

