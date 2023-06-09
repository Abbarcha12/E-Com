import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {saveShippingAddress} from "../actions/cartAction"
import  FormContainer  from "../components/FormContainer";
import { CheckOutSteps } from "../components/CheckOutSteps";
const Shipping = () => {
 const cart = useSelector(state=>state.cart)
 const {shippingAddress} =cart
 const dispatch =useDispatch()
 const navigate =useNavigate()
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const HandleSubmit =(e)=>{
    e.preventDefault()
    dispatch(saveShippingAddress({address,city,country,postalCode}))
    navigate('/payment')
    
  }
  return (
    <FormContainer>
        <CheckOutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={HandleSubmit}>
      <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='Text'
            placeholder='Address '
            value={address}
            onChange={(e) => setAddress(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='Text'
            placeholder='City '
            value={city}
            onChange={(e) => setCity(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='PostalCode'>
          <Form.Label>PostalCode</Form.Label>
          <Form.Control
            type='Text'
            placeholder='PostalCode '
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='Text'
            placeholder='Country '
            value={country}
            onChange={(e) => setCountry(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Shipping;
