import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Products/>,
            }
        ]
    }
])

export default router;