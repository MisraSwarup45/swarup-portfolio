import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href='/'><img src={images.logo} alt="logo" /></a>
        </div>

        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'education', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <Link to={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'education', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        {/* <button type="button" className="resume" onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/drive/u/0/folders/1zmfG3Qfkki-K31HZ19L9qcffvyyx4YsK';

        }} >Resume</button> */}

      </nav>
    </BrowserRouter>
  )
}

export default Navbar;