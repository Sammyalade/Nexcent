import Layout from "../Component/Layout";
import Home from "../Pages/Home";

export const ROUTES = [
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            },

            {
                path: "home",
                element:<Home/>
            },

            {
                path: "",
                element:<></>
            }


        ]
    }
]
