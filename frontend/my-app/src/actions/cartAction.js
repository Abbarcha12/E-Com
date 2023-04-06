import {
  ADD_ITEM,
  REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
  payment_Shipping_Address
} from "../constants/productConstant";

import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log(id.id, qty);
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shipping", JSON.stringify(data));
};

export const savePaymentAddress = (data) => (dispatch) => {
    dispatch({
      type: payment_Shipping_Address,
      payload: data,
    });
    localStorage.setItem("payment", JSON.stringify(data));
  };
  
