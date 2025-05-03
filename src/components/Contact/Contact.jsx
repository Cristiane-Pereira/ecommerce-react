import React, { useState } from 'react';

import './contact.css';

const Contact = () => {
  const [user, setUser] = useState(
    {
      name: '', email: '', subject: '', message: ''
    }
  );

  let names, values;

  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({...user, [names]: values})
  }

  const send = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;
  
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ name, email, subject, message })
    }
  
    try {
      const response = await fetch('https://react-ecommerce-contact-7eddb-default-rtdb.firebaseio.com/message.json', option);
      
      if (!response.ok) {
        throw new Error("Erro ao enviar a mensagem");
      }
  
      alert("Mensagem enviada com sucesso!");
      setUser({ name: '', email: '', subject: '', message: '' });
  
    } catch (error) {
      alert("Ocorreu um erro ao enviar a mensagem.");
      console.error(error);
    }
  }
  
  return (
    <>
     <div className="contact">
      <div className="container">
        <div className="form" method="POST">
          <h2># Contato</h2>
          <div className="box">
            <div className="lable">
              <h4>Nome:</h4>
            </div>
            <div className="input">
              <input type="text" placeholder="Nome" value={user.name} name="name" onChange={data} />
            </div>
          </div>
          <div className="box">
            <div className="lable">
              <h4>E-mail:</h4>
            </div>
            <div className="input">
              <input type="email" placeholder="E-mail" value={user.email} name="email" onChange={data} />
            </div>
          </div>
          <div className="box">
            <div className="lable">
              <h4>Assunto:</h4>
            </div>
            <div className="input">
              <input type="text" placeholder="Subject" value={user.subject} name="subject" onChange={data} />
            </div>
          </div>
          <div className="box">
            <div className="lable">
              <h4>Mensagem:</h4>
            </div>
            <div className="input">
              <textarea placeholder="Mensagem" value={user.message} name="message" onChange={data}></textarea>
            </div>
          </div>
          <button type="submit" onClick={send}>Enviar</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Contact