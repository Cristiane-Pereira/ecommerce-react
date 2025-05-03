import React from 'react';
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";

import Logo from "../../assets/images/logo.png";

import './footer.css';

const Footer = () => {
  return (
    <>
     <div className="footer">
        <div className="container">
            <div className="left-box">
                <div className="box">
                    <div className="icon_box">
                      <FaPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Grande Economia</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                      <FaShippingFast />
                    </div>
                    <div className="detail">
                        <h3>Entrega Grátis</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                      <FaHeadphones />
                    </div>
                    <div className="detail">
                        <h3>Atendimentos ao cliente 24h</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                      <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>Banco de Dinheiro</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>

            <div className="right-box">
              <div className="header">
                <img src={Logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
              </div>
              <div className="bottom">
                <div className="box">
                  <h3>Sobre nós</h3>
                  <ul>
                    <li>Contato</li>
                    <li>Pagamento</li>
                    <li>Vendas</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Produtos</h3>
                  <ul>
                    <li>Entregas</li>
                    <li>Rastreamento</li>
                    <li>Novos Produtos</li>
                    <li>Produtos Antigos</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Contato</h3>
                  <ul>
                    <li>400, Produtos E-commerce LTDA</li>
                    <li>+55 (00) 00000-0000</li>
                    <li>fake-ecommerce@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer