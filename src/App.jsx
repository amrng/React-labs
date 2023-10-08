import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './LayOut/LayOut'
import Home from './home/Home'
import About from './about/About'
import Gallery from './gallery/Gallery'
import Contact from './contact/Contact'


const router = createBrowserRouter([
  {path:"", element:<LayOut/>, children:[
    {index:true, element:<Home/>},
    {path:"about", element:<About/>},
    {path:"gallery", element:<Gallery/>},
    {path:"contact", element:<Contact/>},
  ]}
])

export default function App() {
  return (
    <RouterProvider router={router}>
    
    
    </RouterProvider>
  )
}
