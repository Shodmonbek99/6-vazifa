// react router dom imports
import { createBrowserRouter, RouterProvider, router} from "reatc";

import {
    HomeLayout,
    Landing,
    Error,
    Products,
    SingleProduct,
    Cart,
    About,
    Register,
    Login,
    Checkout,
    Orders,
} from "./pages";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            errorElement: <Error />,
            children: [
                {
                    index:true,
                    element: <Landing />,
                },
                {
                    index:"/products",
                    element: <Products />,   
                },
                {
                    index:"/products",
                    element: <SingleProduct />,   
                },
                {
                    index:"/checkout",
                    element: <Checkout />,
                },
            ]
        },
                {
                    index:"/orders",
                    element: <Orders />,
                },
                {
                    index:"/login",
                    element: <Login />,
                    errorElement: <Error />,
                },
                {
                    index:"/register",
                    element: <Register />,
                    errorElement: <Error />,
                },
            
    ]);
    return <RouterProvider router={routes} />
}

export default routes;