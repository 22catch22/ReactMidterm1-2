import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/CreateProfile";
import Bestsellers from "./components/Bestsellers";
import {Link} from "react-router-dom" 
import './App.css'
import Navbar from './components/Navbar';
import { Shoppycontext } from './components/shopstuff/BuyBooks';
import { Cart } from './components/shopstuff/cart';
import { BuyBooks } from './components/shopstuff/BuyBooks';
import Reviews from './components/Reviewstuff/Reviews';

export default function App() {

       return (     
        
        //Welcome to Josh Becker's 2024 midterm
        //While I wasn't able to get this thing working in time, 
        //let it be known that I tried my hardest 

        // Lets start with the routing stuff
    <div className='App'>
      
    <Shoppycontext>
    <BrowserRouter>
    <Navbar />
    <Routes>
  <Route path = "/" element = {<Bestsellers/>} />
  <Route path = "Profile" element = {<Profile />} />
  <Route path = "/BuyBooks" element = {<BuyBooks />}/>
  <Route path = "/cart" element = {<Cart />}/>
   <Route path = "/" element = {<Reviews />}/>
</Routes>
</BrowserRouter>
</Shoppycontext>
</div>
  )

}
//moving along
 
