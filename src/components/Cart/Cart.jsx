import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";

import './cart.css';

const Cart = ({cart, setCart}) => {
  const addProductCart = (product) => {
    const exist = cart.find((item) => {
        return item.id === product.id;
    });

    setCart(cart.map((curElm) => {
        return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm;
    }));
  }

  const subProductCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
  
    if (exist.qty > 0) {
      setCart(cart.map((curElm) => {
        return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm;
      }));
    }
  };
  

  const removeProductCard = (product) => {
    const exist = cart.find((item) => {
        return item.id === product.id;
    });

    if(exist.qty > 0) {
        setCart(cart.filter((curElm) => {
            return curElm.id !== product.id;
        }))
    }
  }

  const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <div className="cart">
        <h3># Carrinho</h3>
         {cart.length === 0 && (
            <>
                <div className="empty_cart">
                   <h2>Seu carrinho de compras esta vazio</h2>
                   <Link to="/shop">
                   <button>Comprar agora</button></Link>
                </div>
            </>
         )} 
         <div className="container">
            {cart.map((curElm) => (
                <>
                 <div className="box">
                    <div className="img_box">
                        <img src={curElm.image} alt={curElm.description} />
                    </div>
                    <div className="detail">
                        <div className="info">
                            <h4>{curElm.cat}</h4>
                            <h3>{curElm.name}</h3>
                            <p>Preço: {curElm.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <p>Total: R$ {(curElm.price * curElm.qty).toFixed(2)}</p>
                        </div>
                        <div className="quantity">
                            <button onClick={() => addProductCart(curElm)}>+</button>
                            <input type="number" value={curElm.qty} />
                            <button onClick={() => subProductCart(curElm)}>-</button>
                        </div>
                        <div className="icon">
                            <li onClick={() => removeProductCard(curElm)}><MdClose /></li>
                        </div>
                    </div>
                 </div>
                </>
            ))}
         </div>
         <div className="bottom">
            {cart.length > 0 && 
              <>
                <div className="total">
                  <h4>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                </div>
                <button>Confira</button>
              </>
            }
         </div>
      </div>
    </>
  )
}

export default Cart