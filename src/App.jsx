
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Products from './pages/Products';
import Service from './pages/Service';
import About from './pages/About';
import Details from './pages/Details';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/products',
          element:<Products></Products>,
          loader: async ()=>{
            return fetch('https://dummyjson.com/products')
          },
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader: async({params})=>{
            return fetch (`https://dummyjson.com/products/${params.id}`)
          }
        },
        {
          path:'/service',
          element:<Service></Service>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router = {router}></RouterProvider>
    </>
  )
}

export default App
