import React from 'react'
import {Navbar,Brand,CTA} from './components';
import {Header,Footer,Possibility,WhatGPT3,Blog,Features} from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App