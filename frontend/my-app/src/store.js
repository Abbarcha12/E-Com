import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducre ,productDetailReducre} from "./reducres/productReducre"
import { cartReducers } from "./reducres/cartReducers"
import {userLoginReducer,userRegisterReducer,userDetailReducer,userUpateProfile} from "./reducres/userReducer"
import {orderCreateReducer} from "./reducres/orderReducer"
const reducer =combineReducers({
    productList :productListReducre,
    productDetails:productDetailReducre,
    cart:cartReducers,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetail:userDetailReducer,
    userUpdateProfile:userUpateProfile,
    orderCreate :orderCreateReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) :[]
const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) :null
const shippingAddress = localStorage.getItem('shipping')? JSON.parse(localStorage.getItem('shipping')) :{}



const initialState ={
    cart:{cartItems:cartItemsFromStorage,shippingAddress:shippingAddress},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware  =[thunk]
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store