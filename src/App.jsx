import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

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
            element: <SignIn />
        }
    ])
    return <>
        <RouterProvider router={router} />
    </>
}

export default App;