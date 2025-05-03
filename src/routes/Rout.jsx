import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import Shop from '../components/Shop/Shop';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Rout = ({shop, setShop, filterCategory, allCateCategory, addToCart, cart, setCart}) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/shop" element={<Shop 
               shop={shop} 
               setShop={setShop} 
               filterCategory={filterCategory} 
               allCateCategory={allCateCategory} 
               addToCart={addToCart} 
              />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default Rout;