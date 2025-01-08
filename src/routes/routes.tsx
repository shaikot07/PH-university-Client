import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    children:[
        {
            path:'/',
            element: <LogIn></LogIn>
        }
    ]
  },
]);

export default router;
