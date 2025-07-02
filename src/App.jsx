import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './components/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import OurProjects from './pages/OurProjects.jsx';
import Contact from './pages/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'AboutUs',
    element: <AboutUs />
  },
  {
    path: 'Services',
    element: <Services />
  },
  {
    path: 'projects',
    element: <OurProjects />
  },
  {
    path: 'contact',
    element: <Contact />
  }
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
