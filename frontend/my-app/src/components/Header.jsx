import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

const Header = () => {
  return (
   <header>
         <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      
           <Container>
            <Link to="/">
            <Navbar.Brand >E-shop</Navbar.Brand>
            </Link>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
        <Link to="/cart">
         <Nav.Link > <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
         </Link>
          <Link to="/login"> 
          <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link></Link>

                
              </Nav>
            </Navbar.Collapse>
           </Container>
         
        </Navbar>
   </header>
  )
  }
export default Header