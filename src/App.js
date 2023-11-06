// import{ toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Single_product from './Pages/Single_product';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

import { ToastContainer } from 'react-toastify';
import Profile from './Pages/Profile';


function App() {
  return (
    <BrowserRouter> 
      <ToastContainer></ToastContainer>
      <Routes>
        {/* <Route index path='/' element={<> <Header /> <Home /> <Footer /></>}></Route> */}
        <Route index path='/' element={<>  <Header /> <Home /> <Footer /></>}></Route>
        <Route path='/about' element={<> <Header />  <About /> <Footer /></>}></Route>
        <Route path='/product' element={<> <Header />  <Product /> <Footer /></>}></Route>
        <Route path='/single_product' element={<> <Header />  <Single_product /> <Footer /></>}></Route>
        <Route path='/contact' element={<> <Header />  <Contact /> <Footer /></>}></Route>
        <Route path='/login' element={<> <Header />  <Login /> <Footer /></>}></Route>
        <Route path='/signup' element={<> <Header /> <Signup /> <Footer /></>}></Route>
        <Route path='/profile' element={<> <Header /> <Profile /> <Footer /></>}></Route>



      </Routes>
    </BrowserRouter>

  )
}

export default App;
