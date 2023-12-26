import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import AllItems from './components/AllItems.jsx'
import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import './css/general.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Error from './components/Error.jsx';
// import NavBar from './components/NavBar.jsx';

//Establecer rutas
const dirRoutes = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <Error /> 
},
{
  path: "/search",
  element: <Search />,
},
{
  path: "/allitems",
  element: <AllItems />,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    {/* <NavBar/> */}
    <RouterProvider router={dirRoutes}/>
    <Footer/>
  </React.StrictMode>,
)
