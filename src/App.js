import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChairmanMessage from './pages/ChairmanMessage';
import About from './pages/About';
import StaffsAndTrustees from './pages/StaffsAndTrustees';
import Gallery from './pages/Gallery';
import GalleryView from './pages/GalleryView';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Grants from './pages/Grants';
import GrantsView from './pages/GrantsView';
import Application from './pages/Application';
import News from './pages/News';
import NewsView from './pages/NewsView';
import Press from './pages/Press';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chairman-message' exact element={<ChairmanMessage />} />
        <Route path='/about' exact element={<About />} />
        <Route
          path='/staffs-and-trustees'
          exact
          element={<StaffsAndTrustees />}
        />
        <Route path='/gallery' exact element={<Gallery />} />
        <Route path='/gallery-view' exact element={<GalleryView />} />
        <Route path='/frequently-asked-questions' exact element={<Faqs />} />
        <Route path='/contact-us' exact element={<Contact />} />
        <Route path='/portfolio' exact element={<Portfolio />} />
        <Route path='/grants' exact element={<Grants />} />
        <Route path='/grants-view' exact element={<GrantsView />} />
        <Route path='/application' exact element={<Application />} />
        <Route path='/news' exact element={<News />} />
        <Route path='/news-view' exact element={<NewsView />} />
        <Route path='/press' exact element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
