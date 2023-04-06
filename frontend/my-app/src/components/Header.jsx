import React from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userAction";
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const LogOuthandler = () => {
    dispatch(logout())
   
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>E-shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to='/cart' className='m-2  '>
                <h6 className='text-white mt-1'>
                  <i className='fas fa-shopping-cart'></i> Cart
                </h6>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username' >
            
                    <NavDropdown.Item>      <Link to='/profile' >profile  </Link></NavDropdown.Item>
                    
                    <NavDropdown.Item onClick={LogOuthandler}>
                      LogOut
                    </NavDropdown.Item>
                  
                 
                </NavDropdown>
              ) : (
                <Link to='/login' className='m-2'>
                <h6 className='text-white'>
             
                  <i className='fas fa-user'></i> Sign In
                </h6>
              </Link>
              )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
