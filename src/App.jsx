import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Services from './pages/services/Services'
import Service from './pages/service/Service'
import MyServices from './pages/myServices/MyServices';
import Add from './pages/Add/Add';
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import Register from './pages/register/Register' 
import Login from './pages/login/Login'
import "./app.scss"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
    const Layout =()=>{
      return (
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </>
      )
    }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [{
        path:"/",
        element:<Home/>,
      },
      {
        path:"/services",
        element:<Services/>,
      },
      {
        path:"/service/:id",
        element:<Service/>,
      },
      {
        path:"/orders",
        element:<Orders/>,
      },
      {
        path:"/myServices",
        element:<MyServices/>,
      },
      {
        path:"/messages",
        element:<Messages/>,
      },
      {
        path:"/message/:id",
        element:<Message/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/Add",
        element:<Add/>,
      },
      {
        path:"/register",
        element:<Register/>,
      },
    ]
    },
  ]);
  

  return (
    <>
       <RouterProvider router={router} />
      
    </>
  )
}

export default App
