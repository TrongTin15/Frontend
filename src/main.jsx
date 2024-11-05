import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/global.css'
import Login from './view/login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import RegisterPage from './view/register.jsx'

import TableUser from './view/table.jsx'
import Homepage from './view/home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   children:[
    {
      index:true,
      element:<Homepage />
    },
    {
      path:"table",
      element:<TableUser />
    },
    
    {
      path:"register",
      element:<RegisterPage />
    },
    {
      path:"login",
      element:<Login />
    }
  ]
  },
 
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
