import About from "pages/About";
import App from "App";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "pages/Home";
import ErrorPage from "pages/error-page";
import User from "pages/User";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "posts/:postId",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "user",
        element: <User />,
        children: [
            {
                path: "changeInfo",
                element: <h1>유저 정보 수정</h1>
            }
        ]
    }
]);

export default router;