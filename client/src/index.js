import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Shop from './routes/Shop';
import Programs from './routes/Programs';
import News from './routes/News';
import AboutUs from './routes/AboutUs';
import Product from './routes/Product';

import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './routes/Cart';

/* Routing paths to different parts of website */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "trgovina/:search?",
    element: <Shop />
  },
  {
    path: "emisije",
    element: <Programs />
  },
  {
    path: "novosti",
    element: <News />
  },
  {
    path: "o-nama",
    element: <AboutUs />
  },
  {
    path: "proizvodi/:tag",
    element: <Product />,
  },
  {
    path: "kosarica",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);