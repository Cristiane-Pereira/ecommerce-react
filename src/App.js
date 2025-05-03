import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Rout from './routes/Rout';
import Footer from './components/Footer/Footer';

import { homeProduct } from '../src/utils/mockups/homeProduct';

const App = () => {
  const [shop, setShop] = useState(homeProduct);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filterCategory = (type) => {
    const cateFilter = homeProduct.filter((product) => {
      return product.cat === type;
    });
    setShop(cateFilter);
  }

  const allCateCategory = () => {
    setShop(homeProduct);
  };

  const filterSearch = () => {
    const filtered = homeProduct.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    setShop(filtered);
  };

  const addToCart = (product) => {
    const isExist = cart.find((item) => {
      return item.id === product.id;
    });

    if(isExist) {
      alert("Este produto já foi adicionado ao carrinho");
    } else {
      setCart([...cart, {...product, qty: 1}]);
      alert("Adicionado ao carrinho")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} filterSearch={filterSearch} />
        <Rout 
          shop={shop} 
          setShop={setShop} 
          filterCategory={filterCategory} 
          allCateCategory={allCateCategory} 
          filterSearch={filterSearch} 
          addToCart={addToCart} 
          cart={cart}
          setCart={setCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App