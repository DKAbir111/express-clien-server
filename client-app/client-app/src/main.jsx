import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch('http://localhost:5001/products')
      },
      {
        path: "/product/:id",
        element: <Product />,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
