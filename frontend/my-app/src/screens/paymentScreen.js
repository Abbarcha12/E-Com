import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {savePaymentAddress} from "../actions/cartAction";
import FormContainer from "../components/FormContainer";
import { CheckOutSteps } from "../components/CheckOutSteps";
const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!shippingAddress) {
    navigate("/shipping");
  }
  const [payment, setPayment] = useState("PayPal");

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentAddress(payment));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckOutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={HandleSubmit}>
        <Form.Group>
          <Form.Label as='legend'>select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Pay Pal or Credit Card'
              id='PayPal'
              name='paymentmethod'
              value='PayPal'
              checked
              onChange={(e)=> setPayment(e.target.value)}
              ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
