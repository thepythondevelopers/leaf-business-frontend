import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Promote from './pages/Promote';
import PromoteBusiness from './pages/Promote/PromoteBusiness';
import ReviewPromotion from './pages/Promote/ReviewPromotion';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51N1BF2LBB5YOlndbdcRvdffDNYGVDqzZWyn2MogIKUDn3yfJedpcyQm3bCblh304SHjINGoFKwzz8qNUqyhFyyXB009AJ54tgA');
function App() {
  return (
    <>
    <Elements stripe={stripePromise}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />

      <Route path="/dashboard" element={<Dashboard/>} />      
      <Route path="/promote" element={<Promote/>} />
      <Route path="/promote/:businessId" element={<PromoteBusiness/>} />
      <Route path="/promote/:businessId/review" element={<ReviewPromotion/>} />
 
    </Routes>
    </BrowserRouter>
    </Elements>
    </>

  );
}

export default App;
