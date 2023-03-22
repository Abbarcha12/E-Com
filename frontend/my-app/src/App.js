
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"
import HomeScreen from './screens/HomeScreen';
import Productscreen from './screens/Productscreen';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <Header/>

  <main className='py-3'>
 <Container >

<Routes>
  <Route path="/" element={<HomeScreen/>} exact />
  <Route path="/product/:id" element={<Productscreen/>} exact />
</Routes>
 </Container>
  </main>
   <Footer/>
   </>
  );
}

export default App;
