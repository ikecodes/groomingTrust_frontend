import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChairmanMessage from './pages/ChairmanMessage';
import About from './pages/About';
import StaffAndTrustees from './pages/StaffAndTrustees';
import Gallery from './pages/Gallery';
import GalleryView from './pages/GalleryView';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ProgramAreas from './pages/ProgramAreas';
import Grants from './pages/Grants';
import GrantsView from './pages/GrantsView';
import Application from './pages/Application';
import Blog from './pages/Blog';
import BlogView from './pages/BlogView';
import Press from './pages/Press';

//////////////////////////ADMIN
import Login from './pages/Login';
import ScrollToTop from './utils/ScrollToTop';
import AdminGrants from './pages/AdminGrants';
import AdminPortfolio from './pages/AdminPortfolio';
import AdminBlog from './pages/AdminBlog';
import AdminPress from './pages/AdminPress';
import AdminMessages from './pages/AdminMessages';
import AdminApplications from './pages/AdminApplications';
import AdminGallery from './pages/AdminGallery';
import AdminStaffTrustees from './pages/AdminStaffTrustees';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route
            path='/chairmans-message'
            exact
            element={<ChairmanMessage />}
          />
          <Route path='/about' exact element={<About />} />
          <Route
            path='/staff-and-trustees'
            exact
            element={<StaffAndTrustees />}
          />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/gallery-view' exact element={<GalleryView />} />
          <Route path='/frequently-asked-questions' exact element={<Faqs />} />
          <Route path='/contact-us' exact element={<Contact />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/program-areas' exact element={<ProgramAreas />} />
          <Route path='/grants' exact element={<Grants />} />
          <Route path='/grants-view' exact element={<GrantsView />} />
          <Route path='/application' exact element={<Application />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/blog-view' exact element={<BlogView />} />
          <Route path='/press' exact element={<Press />} />

          {/*ADMIN ////////////////////////////////////////////////////////////////// */}
          <Route path='/login' exact element={<Login />} />
          <Route path='/admin-grants' exact element={<AdminGrants />} />
          <Route path='/admin-portfolio' exact element={<AdminPortfolio />} />
          <Route path='/admin-blog' exact element={<AdminBlog />} />
          <Route path='/admin-press' exact element={<AdminPress />} />
          <Route path='/admin-messages' exact element={<AdminMessages />} />
          <Route
            path='/admin-applications'
            exact
            element={<AdminApplications />}
          />
          <Route path='/admin-gallery' exact element={<AdminGallery />} />
          <Route
            path='/admin-staff-trustees'
            exact
            element={<AdminStaffTrustees />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
