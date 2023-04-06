import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Message from "../components/Message"
import {Row,Col,ListGroup,Image,Form,Button,Card, FormControl, ListGroupItem} from "react-bootstrap"
import {Link, useNavigate, useParams,useLocation} from "react-router-dom"
import {addToCart,removeFromCart} from "../actions/cartAction"
const CartScreen = () => {
  const  id =useParams()   
  const navigate= useNavigate()
  const location= useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) :1
  const removeFormCartHandler= (id)=>{
    dispatch(removeFromCart(id))
    
  }
  const userLogin = useSelector(state=> state.userLogin)
 const{userInfo} =userLogin
  const handleCheckOut  =()=>{
    if(!userInfo){
      navigate('/login')
    } else {
      navigate('/shipping')
    }
    
  }
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)
  const {cartItems} =cart
  useEffect(()=>{
    if(id){
      dispatch(addToCart(id.id,qty))
    }
  },[dispatch,id.id,qty])
  return (
    <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? <Message>
         Your cart is empty <Link to="/"> Go Back</Link>
      </Message>:<ListGroup variant="flush">

        {cartItems.map(item => (
          <ListGroupItem key={item.product}>
           <Row>
            <Col md={2}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col>
            <Link to={`/api/products/${item.product}`}>
              {item.name} 
            </Link>
            </Col>
            <Col md={2}>
              ${item.price}
            </Col>
            <Col md={2}>
            <FormControl as="select" value={item.qty} onChange={(e)=> dispatch(addToCart(item.product,Number(e.target.value)))}>
          {      [...Array(item.countInStock).keys()].map( (x) =>  (
            <option value={x + 1} key={x + 1}>{x + 1}</option>
           ))}
                </FormControl>
            </Col>
            <Col md={2}>
            <Button type="button" variant='light' onClick={()=>removeFormCartHandler(item.product)}>
             <i className='fas fa-trash '></i>
            </Button>
            </Col>
           </Row>
          </ListGroupItem>
        ))}
        </ListGroup>}
    </Col>
<Col md={4}>
  <ListGroup>
   <ListGroupItem>
    <h4>SubTotal ({cartItems.reduce((acc,item)=> acc + item.qty,0
   )}) items</h4>
   ${cartItems.reduce((acc,item)=> acc + item.qty * item.price,0).toFixed(2)}
   </ListGroupItem>
   <ListGroupItem>
    <Button type='button' className="btn-block" disabled={cartItems.length === 0} onClick={handleCheckOut}>
    proceed to checkOut
    </Button>
   </ListGroupItem>
</ListGroup>
 
</Col>

    </Row>
  )
}

export default CartScreen