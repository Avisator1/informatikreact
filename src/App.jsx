import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from './components/Navbar';
import Services from './Services';
import BlogPosts from './BlogPost';

const App = () => {
  return (
    <div>
        <div>
        <Navbar />
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<BlogPosts />} />
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
};

export default App;