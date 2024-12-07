import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/ErrorPage";

function App () {
    const router =createBrowserRouter([
        {
            path:'/login',
            element: <Login />,
            errorElement: <Error404 />,
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