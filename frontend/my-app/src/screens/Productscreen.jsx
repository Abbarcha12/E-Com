import React,{useEffect, useState} from 'react'
import {Link, useParams ,useNavigate  }from "react-router-dom"
import Rating from '../components/Rating'
import Message from '../components/Message';
import Loader from '../components/loader';
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from '../actions/productAction';
import {Row,Col,Image,ListGroup,ListGroupItem,Card,Button,FormControl} from "react-bootstrap"
const Productscreen = () => {
  const [qty,setQty] = useState(1)
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const productDetail= useSelector(state => state.productDetails)
  const {loading,product,error} = productDetail


 
  const { id } = useParams();

  useEffect(()=>{
    dispatch(listProductDetail(id))

  },[dispatch,id])

const addToCartHandler =()=>{
navigate(`/cart/${id}?qty=${qty}`)
}

  return (
    <>
    <Link className='btn btn-light my-3' to="/">
    Go Back 
    </Link>
    {loading?<Loader/>: error ? <Message variant="danger">{error}</Message>: (<Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroupItem>
            <h2>{product.name}</h2>
          </ListGroupItem>
          <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroupItem>
          <ListGroupItem>
            Price: ${product.price}
          </ListGroupItem>
          <ListGroupItem>
            Description:{product.description}
          </ListGroupItem>
        </ListGroup>


      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
             <ListGroupItem>
              <Row>
                <Col>
                Price:
                </Col>
                <Col>
                <strong>
                  ${product.price}
                </strong>
                </Col>
              </Row>
             </ListGroupItem>
             <ListGroupItem>
              <Row>
                <Col>
               Status:
                </Col>
                <Col>
                {product.countInStock>0?"In Stock":"Out of stock"}
                </Col>
              </Row>
             </ListGroupItem>
             {product.countInStock>0 && (<ListGroupItem>
              <Row>
                <Col>
                Qty
                </Col>
                <Col>
                <FormControl as="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
          {      [...Array(product.countInStock).keys()].map( (x) =>  (
            <option value={x + 1} key={x + 1}>{x + 1}</option>
           ))}
                </FormControl>

                </Col>
              </Row>
             </ListGroupItem>)}
             <ListGroupItem >
              <Button className="btn-block" type="button" disabled={product.countInStock===0} onClick={addToCartHandler}>
               Add To Cart
              </Button>
             </ListGroupItem>

          </ListGroup>
        </Card>
      </Col>
    </Row>) }
    
    </>
  )
}

export default Productscreen