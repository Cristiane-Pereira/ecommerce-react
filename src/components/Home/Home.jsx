import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { homeProduct } from '../../utils/mockups/homeProduct';

import './home.css';

const Home = ({addToCart}) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(homeProduct);

  const filtetCate = (types) => {
    if (types === 'all') {
      setTrendingProduct(homeProduct);
      return;
    }
  
    const filterProduct = homeProduct.filter((curElm) => curElm.type === types);
    setTrendingProduct(filterProduct);
  };

  const productCategory = () => {
    const newCategory = homeProduct.filter((item) => {
      return item.type === "new";
    });
    
    const featuredCategory = homeProduct.filter((item) => {
      return item.type === "featured";
    });

    const topCategory = homeProduct.filter((item) => {
      return item.type === "top";
    });

    setNewProduct(newCategory);
    setFeaturedProduct(featuredCategory);
    setTopProduct(topCategory);
  }

  useEffect(() => {
    productCategory()
  }, []);
  
  return (
    <div className="home">
      <div className="top_banner">
        <div className="content">
          <h3>Silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first odder</p>
          <Link to='/shop' className="link">Comprar agora</Link>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2>Produto em alta</h2>
              </div>
              <div className="cate">
                <h3 onClick={() => filtetCate('new')}>Novo</h3>
                <h3 onClick={() => filtetCate('featured')}>Produtos em destaque</h3>
                <h3 onClick={() => filtetCate('top')}>Mais vendido</h3>
                <h3 onClick={() => filtetCate('all')}>Ver todos produtos</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {trendingProduct.map((curElm) => (
                  <>
                    <div className="box">
                      <div className="img_box">
                        <img src={curElm.image} alt="" />
                        <div className="icon">
                          <div className="icon_box">
                            <FaEye />
                          </div>
                          <div className="icon_box">
                            <FaHeart />
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <h3>{curElm.name}</h3>
                        <p>R$ {curElm.price}</p>
                        <button className="btn" onClick={() => addToCart(curElm)}>Adicionar ao carrinho</button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <button className="more">Mostrar Mais</button>
            </div>
          </div>

          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>Nosso depoimento</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src="image/testimunha.jpg" alt="Testimonial" />
                  </div>
                  <div className="info">
                    <h3>Sthephane Dorie</h3>
                    <h3>Web Designer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>
                </div>
              </div>

              <div className="newsletter">
                <div className="head">
                  <h3>Informativo</h3>
                </div>
                <div className="form">
                  <p>Junte-se à nossa lista de e-mail</p>
                  <input type="email" placeholder="e-mail" autoComplete="false" />
                  <button>Escreva-se</button>
                  <div className="icon_box">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>
                    <div className="icon">
                      <FaInstagram />
                    </div>
                    <div className="icon">
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banners">
       <div class="container">
          <div class="left_box">
            <div class="box">
              <img src="image/banner-2.webp" alt="banner" />
            </div>
            <div class="box">
              <img src="image/banner-5.webp" alt="banner" />
            </div>
            <div class="box">
              <img src="image/banner-6.webp" alt="banner" />
            </div>
          </div>
          <div class="right_box">
            <div class="top">
              <div class="box">
                <img src="image/banner-3.webp" alt="banner" />
              </div>
              <div class="box">
                <img src="image/banner-7.webp" alt="banner" />
              </div>
            </div>
            <div class="bottom">
              <img src="image/banner-4.webp" alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="header">
              <h2>Novos Produtos</h2>
            </div>
            {newProduct.map((curElm) => (
              <>
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{curElm.name}</h3>
                    <p>{curElm.price}</p>
                    <div className="icon">
                      <button>
                        <FaEye />
                      </button>
                      <button>
                        <FaHeart />
                      </button>
                      <button onClick={() => addToCart(curElm)}>
                        <BsCart4 />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="box">
            <div className="header">
              <h2>Produtos em Destaque</h2>
            </div>
            {featuredProduct.map((curElm) => (
              <>
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{curElm.name}</h3>
                    <p>{curElm.price}</p>
                    <div className="icon">
                      <button>
                        <FaEye />
                      </button>
                      <button>
                        <FaHeart />
                      </button>
                      <button onClick={() => addToCart(curElm)}>
                        <BsCart4 />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="box">
            <div className="header">
              <h2>Produtos mais Vendidos</h2>
            </div>
            {topProduct.map((curElm) => (
              <>
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.image} alt="" />
                  </div>
                  <div className="detail">
                    <h3>{curElm.name}</h3>
                    <p>{curElm.price}</p>
                    <div className="icon">
                      <button>
                        <FaEye />
                      </button>
                      <button>
                        <FaHeart />
                      </button>
                      <button onClick={() => addToCart(curElm)}>
                        <BsCart4 />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home