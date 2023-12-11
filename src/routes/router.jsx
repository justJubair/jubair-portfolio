import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Resume from "../pages/Resume/Resume";
import About from "../pages/About/About";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/resume",
                element: <Resume/>
            },
            {
                path: "/about",
                element: <About/>
            }

        ]
    }
])

export default router