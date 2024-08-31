import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Sobre from './Pages/Sobre'
// import Contato from './Pages/Contato'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {path:'sobre', element: <Sobre/>},
//       {path:'contato', element: <Contato/>},
//     ]

//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
