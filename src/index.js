import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './About'; 
import { referral } from './Referral';
import { defaultRedirector } from './defaultRedirector';
import { OptOutEmail } from './OptOutEmail';

const router = createBrowserRouter([
  {
    path: '/help',
    element: <About />,
  },
  {
    path: '/ref',
    loader: referral,
  },
  {
    path: '/optoutemail',
    Component: OptOutEmail,
  },
  {
    path: '/',
    loader: defaultRedirector,
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
