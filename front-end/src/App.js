import './App.css';
import Nav from './components/nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer.js';
import Signup from './components/signup'
import PrivateComponent from './components/PrivateComponents'
import { Component } from 'react';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/Productlist';
import UpdateProduct from './components/UpdateComponent.';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<Productlist />} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/logout" element={<h1>Logout Product Component</h1>} />
        <Route path="/profile" element={<h1>Profile Product Component</h1>} />
        
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
