import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import ShowMyProfile from "./views/myProfile/Show";
import NotFound from "./views/NotFound";
import DefaultLayout from "./Layouts/DefaultLayout";
import GuestLayout from "./Layouts/GuestLayout";
import FeedbackList from "./views/feedback/List";
import ForgotPassword from "./views/auth/ForgotPassword";
import ResetPassword from "./views/auth/ResetPassword";
import Home from "./views/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/profile',
                element: <ShowMyProfile />
            },
            {
                path: '/feedback',
                element: <FeedbackList />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;