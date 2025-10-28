import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root/Root.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import MyBookings from './pages/MyBookings.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'
import AuthProvider from './AuthProvider.jsx'
import AllRooms from './AllRooms.jsx'
import { ToastContainer } from 'react-toastify'
import RoomDetails from './pages/RoomDetails.jsx'
import ErrorPath from './ErrorPath.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Termsandcondition from './Components/Terms&condition.jsx'
import FindUs from './Components/FindUs.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,

        Component:Home
      },
   
      {
          path:'mybookings',
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path:'login',
        Component:Login
      }
      ,
      {
        path:'register',
        Component:Register
      }
      ,
      {
        path:'allrooms',
       
        Component:AllRooms
      },
        {
        path:'aboutus',
       
        Component:AboutUs
      },
       {
        path:'findus',
       
        Component:FindUs
      },
       {
        path:'termsandcondition',
       
        Component:Termsandcondition
      },
      {
        path:'roomDetails/:id',
        loader:({params})=>fetch(`https://hotel-server-side-mu.vercel.app/hotels/${params.id}`),
        element:<RoomDetails></RoomDetails>
      },

       
    ],

  },
  {
    path:'*',
    Component:ErrorPath
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer/>
  </StrictMode>
)
