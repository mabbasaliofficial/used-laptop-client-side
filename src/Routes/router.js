import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyBooking from "../Pages/MyBooking";
import AllUsers from "../Pages/AllUsers";
import ProductDetails from "../Pages/ProductDetails";
import Products from "../Pages/Products";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllSeller from "../Pages/AllSeller";
import AllBuyer from "../Pages/AllBuyer";
import PaymentPage from "../Pages/PaymentPage";
import SellerRoute from "./SellerRoute";
import AddProducts from "../Pages/AddProducts";
import MyProducts from "../Pages/MyProducts";
import MyBuyer from "../Pages/MyBuyer";
import UserProfile from "../Pages/UserProfile";
import BuyerRoute from "./BuyerRoute";

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
                element: <PrivateRoute><Products/></PrivateRoute>,
            },
            {
                path: '/products/:id',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element : <PrivateRoute><ProductDetails/></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <UserProfile/>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <PaymentPage/>,
                loader: ({params})=> fetch(`http://localhost:5000/buying/${params.id}`)
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers/></AdminRoute>,
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller/></AdminRoute>,
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer/></AdminRoute>,
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts/></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts/></SellerRoute>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoute><MyBuyer/></SellerRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyBooking/></BuyerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default router;