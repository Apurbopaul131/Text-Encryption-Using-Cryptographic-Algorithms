import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Additive from './Additive/Additive.jsx';
import Multiplicative from './Multiplicative/Multiplicative.jsx';
import Affine from './Affine/Affine.jsx';
import Vigenere from './Vigenere/Vigenere.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'cipher/1',
    element:<Additive></Additive>,
  },
  {
    path:'cipher/2',
    element:<Multiplicative></Multiplicative>
  },
  {
    path:'cipher/3',
    element:<Affine></Affine>
  },
  {
    path:'cipher/4',
    element:<Vigenere>ß</Vigenere>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
