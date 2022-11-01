import React from 'react';

import { About, Footer, Header, Skills, Education, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (

  <div className="app">
    <Navbar />
    <Header />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <About />
    <Work />
    <Skills />
    <Education />
    <Footer />
  </div>
);

export default App;