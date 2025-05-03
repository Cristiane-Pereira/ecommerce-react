import React, { useState } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import { IoCloseCircleOutline } from "react-icons/io5";

import './shop.css';

const Shop = ({ shop, filterCategory, allCateCategory, addToCart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null); // começa como null

  const detailProduct = (product) => {
    setDetail(product); // define o produto clicado
    setShowDetail(true); // abre o modal
  };

  const closeDetail = () => {
    setShowDetail(false);
    setDetail(null);
  };

  return (
    <>
      {showDetail && detail && (
        <div className="product_detail">
          <button className="close-btn" onClick={closeDetail}>
            <IoCloseCircleOutline />
          </button>
          <div className="container">
            <div className="img_box">
              <img src={detail.image} alt={detail.name} />
            </div>
            <div className="info">
              <h4># {detail.cat}</h4>
              <h2>{detail.name}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis</p>
              <h3>R$ {detail.price}</h3>
              <button onClick={() => addToCart(detail)}>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      )}

      <div className="shop">
        <h2># shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>Todas Categorias</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={allCateCategory}># Todos Produtos</li>
                  <li onClick={() => filterCategory("tv")}># tv</li>
                  <li onClick={() => filterCategory("phone")}># phone</li>
                  <li onClick={() => filterCategory("computer")}># computer</li>
                  <li onClick={() => filterCategory("clock")}># clock</li>
                </ul>
              </div>
            </div>

            <div className="banner">
              <div className="img_box">
                <img src="image/banner-9.png" alt="Banner" />
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/banner-8.webp" alt="Banner" />
              </div>
            </div>

            <div className="product_box">
              <h2>Comprar Produtos</h2>
              <div className="product_container">
                {shop.length > 0 ? (
                  shop.map((curElm) => (
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.image} alt={curElm.name} />
                        <div className="icon">
                          <li><FaHeart /></li>
                          <li onClick={() => detailProduct(curElm)}><FaEye /></li>
                        </div>
                      </div>
                      <div className="detail">
                        <h3>{curElm.name}</h3>
                        <p>R$ {curElm.price}</p>
                        <button onClick={() => addToCart(curElm)}>Adicionar ao carrinho</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nenhum produto encontrado! :(</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
