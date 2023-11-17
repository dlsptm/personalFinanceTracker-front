import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SideNav from './components/sidenav/SideNav';
import Cashflows from './pages/Cashflows'
import { BrowserRouter } from 'react-router-dom'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },  
  {
    path: "/cashflows",
    element: <Cashflows />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
        <SideNav />
    </BrowserRouter>
  </React.StrictMode>
);


