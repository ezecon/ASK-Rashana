import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:'',
                element: <Home/>
            }

        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }
]);

export default router;
