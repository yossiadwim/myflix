import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'
import ErrorPage from './pages/404.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>

  },
  {
    path: '/404',
    // element: <button className='bg-blue-700 text-white rounded h-10 px-6'>AAA</button>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    'path': '/details/:id',
    element: <Details></Details>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
