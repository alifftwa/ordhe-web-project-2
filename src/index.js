import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/HomePage/App';
import reportWebVitals from './reportWebVitals';
import PaymentDetail from './pages/PaymentDetails'
import BookTable from './pages/BookTable';
import EOrder from './pages/Eorder';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment-detail",
    element: <PaymentDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/book-table",
    element: <BookTable />,
  },
  {
    path: "/e-order",
    element: <EOrder />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
