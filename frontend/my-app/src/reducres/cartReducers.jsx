import {
  ADD_ITEM,
  REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
  payment_Shipping_Address
} from "../constants/productConstant";

export const cartReducers = (state = { cartItems: [] ,shippingAddress:{}}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
      case payment_Shipping_Address:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
