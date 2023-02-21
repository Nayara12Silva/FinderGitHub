import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import Tema from './Style/tema'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//pages
import { Home } from './Routes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Tema}>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
)
