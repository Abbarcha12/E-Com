import React, { useState, useEffect } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/loader";
import {getUserDetail,userUpdateProfile} from "../actions/userAction"


const ProfileScreen = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message,setMessage]=useState(null)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

  const navigate =useNavigate()
  const dispatch = useDispatch()
  const userDetail = useSelector(state=>state.userDetail)
  const {loading,error,user} = userDetail
  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const userUpdateProfiler = useSelector(state=>state.userUpdateProfile)
  const {success} = userUpdateProfiler
useEffect(()=>{
    if(!userInfo){
      navigate("/login")
    }else{
        if(!user.name){
     dispatch(getUserDetail('profile'))
        }else{
            setEmail(user.email)
            setName(user.name)
        }
    }
      },[navigate,userInfo,dispatch,user.name,user.email])

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
     setMessage("Password do not match")
    }else{
       dispatch(userUpdateProfile({id:user._id,name,email,password}))
    }
  

  
  }


  return <Row>
    <Col md={3}>

    <h2>My Profile</h2>
      {message && <Message variant="danger">{message}</Message>}

      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">{success}</Message>}

      {loading && <Loader/>}
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='Text'
            placeholder='Name '
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email '
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            placeholder='password '
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='ConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password '
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" style={{marginTop:"10px"}}>
Update
        </Button>
      </Form>
    </Col>
    <Col md={9}>
        <h1> My Orders</h1>

    </Col>
  </Row>
   
};

export default ProfileScreen;
