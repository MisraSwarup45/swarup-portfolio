import React, { useState } from 'react';
import { images } from '../../constants';
import { client } from '../../client';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si'
// import { SiLinktree, SiLeetcode } from 'react-icons/si'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id='contact'>
      <h2 className="head-text">Connect To Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:swarupkum45@gmail.com" className="p-text">Click Here to Mail</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Linktree" />
          <a href="https://linktr.ee/misraswarup45" target="_blank" rel="noreferrer" className="p-text">Click Here to Connect</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for connecting to me!
          </h3>
        </div>
      )}
        
      <div className='socialHandle'>
        <div className='socials'>
        <a href='https://www.linkedin.com/in/misraswarup45/' target="_blank" rel="noreferrer" ><AiFillLinkedin color='#ffff' fontSize="1.5em" /></a>
        <a href='https://leetcode.com/MisraSwarup45/' target="_blank" rel="noreferrer" ><SiLeetcode color='#ffff' fontSize='1.5rem' /></a>
        <a href='https://github.com/MisraSwarup45' target="_blank" rel="noreferrer" ><AiFillGithub color='#ffff' fontSize="1.5em" /></a>
        <a href='https://twitter.com/MisraSwarup45' target="_blank" rel="noreferrer" ><AiFillTwitterSquare color='#ffff' fontSize="1.5em" /></a>
        <a href='https://www.instagram.com/misraswarup45/' target="_blank"  rel="noreferrer" ><AiFillInstagram color='#ffff' fontSize="1.5em" /></a>
        <a href='https://www.facebook.com/misraswarup45/' target="_blank" rel="noreferrer"><AiFillFacebook color='#ffff' fontSize="1.5em" /></a>
        {/* <a href='#'><SiLinktree color='#313bac' fontSize="2.5em" /></a> */}
        </div>
        <div className='socials'>
          <p >@{(new Date().getFullYear())} Swarup All Rights Reserved</p>
        </div>
      </div>

    </div>
  );
};



export default Footer;