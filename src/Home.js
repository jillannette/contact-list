import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">My Contact List App</Navbar.Brand>
           
              <Nav className="me-auto">
               <LinkContainer to="/contactList">
              <Nav.Link to="/contactList">View Contact List</Nav.Link>
              </LinkContainer> 
             
              <LinkContainer to="/addContact">
              <Nav.Link to="/addContact">Add a New Contact</Nav.Link>
              </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
        </>
    
      </>
  )
}
