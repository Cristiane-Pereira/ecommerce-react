import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { MdLocalShipping } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";

import Logo from "../../assets/images/logo.png";

import './nav.css';

  const Nav = ({search, setSearch, filterSearch}) => {
  const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();

  return (
    <>
      <div className="header">
        <div className="top_header">
            <div className="icon">
                <MdLocalShipping />
            </div>
            <div className="info">
                <p>Frete grátis a partir de 100 reais em compras</p>
            </div>
        </div>

        <div className="mid_header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" value={search} placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
            <button onClick={filterSearch}><IoSearch /></button>
          </div>

          {!isAuthenticated ? (
            // lOGIN se não estiver autenticado
            <div className="user">
              <div className="icon">
                <CiLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Entrar</button>
              </div>
            </div>
          ): (
            // LOGOUT se tiver autenticado
            <div className="user">
              <div className="icon">
                <CiLogout  />
              </div>
              <div className="btn">
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sair</button>
              </div>
            </div>
          )}
        </div>

        <div className="last_header">
          <div className="user_profile">
            { isAuthenticated ? (
              <>
                <div className="icon">
                  <RiUser3Line />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ): (
              <>
                <div className="icon">
                  <RiUser3Line />
                </div>
                <div className="info">
                  <p>Fazer login</p>
                </div>
              </>
            )}
          </div>
          
          <div className="nav">
            <ul>
              <li><Link to="/" className="link active">Início</Link></li>
              <li><Link to="/shop" className="link">Comprar</Link></li>
              <li><Link to="/cart" className="link">Carrinho</Link></li>
              <li><Link to="/about" className="link">Sobre</Link></li>
              <li><Link to="/contact" className="link">Contato</Link></li>
            </ul>
          </div>

          <div className="offer">
            <p>Oferta 10% de desconto em todos iphone</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;