import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App () {
    const router =createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/home',
            element: <Home />
        },
        {
            path:'/Sign In',
            element: <SignUp />
        }
    ])
    return <>
        <RouterProvider router={router} />
    </>
}

export default App;