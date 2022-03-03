import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChairmanMessage from './pages/ChairmanMessage';
import About from './pages/About';
import StaffAndTrustees from './pages/StaffAndTrustees';
import Gallery from './pages/Gallery';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chairman-message' exact element={<ChairmanMessage />} />
        <Route path='/about' exact element={<About />} />
        <Route
          path='/staff-and-trustees'
          exact
          element={<StaffAndTrustees />}
        />
        <Route path='/gallery' exact element={<Gallery />} />
        <Route path='/frequently-asked-questions' exact element={<Faqs />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
