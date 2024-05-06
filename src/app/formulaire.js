"use client"

import React, { useState } from 'react';

const ContactForm = () => {
  // Je stock les données du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log({ name, email, subject, message });
    // etre sur que toutes les zones sont lues
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="champs">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          required
        />
      </div>
      <div className="champs">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          required
        />
      </div>
      <div className="champs">
        <label htmlFor="subject"></label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Sujet"
          required
        />
      </div>
      <div className="champs">
        <label htmlFor="message"></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="btnForm">
        <button type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
