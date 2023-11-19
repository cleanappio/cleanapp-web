import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { referral } from './Referral';
import { defaultRedirector } from './defaultRedirector';

const router = createBrowserRouter([
  {
    path: '/ref',
    loader: referral,
  },
  {
    path: '/',
    loader: defaultRedirector,
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
