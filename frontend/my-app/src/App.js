import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Productscreen from "./screens/Productscreen";
import CartScreen from "./screens/CartScreen";
import {  Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/Register";
import ProfileScreen from "./screens/profileScreen";
import Shipping from "./screens/Shipping";
import PaymentScreen from "../src/screens/paymentScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
function App() {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<Productscreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
