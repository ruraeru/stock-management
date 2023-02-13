import About from "pages/About";
import App from "App";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "pages/Home";
import ErrorPage from "pages/error-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "home",
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
        path: 'user',
        element: <div>user <Outlet /></div>,
        children: [
            {
                path: "changeInfo",
                element: <h1>유저 정보 수정</h1>
            }
        ]
    }
]);

export default router;