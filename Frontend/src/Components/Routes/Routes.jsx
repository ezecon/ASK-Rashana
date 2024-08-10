import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Admin from "../../Pages/Admin/Admin";
import Orders from "../../Pages/Admin/Orders";
import ProductsAdmin from "../../Pages/Admin/Products";
import { Products } from "../Products/Products";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Information from "../../Pages/Information/Information";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import Verify from "../../Pages/Verify/Verify";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path:'products',
                element: <Products/>
            },
            {
                path:'carts',
                element: <Cart/>
            },
            {
                path:'profile',
                element: <Profile/>
            },

        ]
    },
    {
        path: '/admin',
        element: <Admin/>,
        children: [
            {
                path:'',
                element:<ProductsAdmin/>
            },
            {
                path:'orders',
                element:<Orders/>
            },
            {
                path:'profile',
                element:<Profile/>
            }
        ]
    }
    ,
    {
        path: '/register',
        element: <Register/>
    }
    ,
    {
        path: '/login',
        element: <Login/>
    }
    ,
    {
        path: 'verify/information',
        element: <Information/>
    }
    ,
    {
        path: '/verify',
        element: <Verify/>
    }
    ,
    {
        path: '*',
        element: <div>404 Not Found</div>
    }
]);

export default router;
