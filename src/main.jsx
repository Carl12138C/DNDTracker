import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Character from './components/Character/Character'
import Roll from './components/Roll'
import Home from './components/Home'
import Error from './components/Error'
import Library from './components/Libary'

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<Error/>,
    children: [
      {
        path: "roll",
        element: <Roll/>
      },
      {
        path: "character",
        element: <Character/>
      },
      {
        path: "library",
        element: <Library/>
      },
      {
        index: true,
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)