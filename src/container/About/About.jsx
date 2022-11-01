import { React, useEffect, useState } from 'react';
import { motion } from "framer-motion";

import './About.scss';

import { images } from '../../constants'

import { urlFor, client } from '../../client';

// const abouts = [
//   {title : "Full Stack Developer", description: "Wants to create Applications that others likes to use.", imgUrl: images.about01},
//   {title : "Backend Developer", description: "I am a backend developer with a passion for building beautiful and functional web applications.", imgUrl: images.about04}
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, []);

  return (
    <div id='about'>
      <h2 className='head-text'>
        I am A <span>backend developer</span>
        <br />
        <p>Good at <span>Problem Solving</span> and Passionate to learn new things</p>
      </h2>

      <div className="resume">
        <button  type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/drive/u/0/folders/1zmfG3Qfkki-K31HZ19L9qcffvyyx4YsK';

        }} >Resume</button>
      </div>


      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"

            key={about.title + index}
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default About