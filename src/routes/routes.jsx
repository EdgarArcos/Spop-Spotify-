import { createBrowserRouter } from 'react-router-dom';
import { LikeLibrary, NowPlaying, Home, SplashScreen, Login, Profile, Register, ResetPassword } from '../pages';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "splashscreen",
        element: <SplashScreen />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path:"resetpassword",
        element: <ResetPassword />
    },
    {
        path:"nowplaying",
        element: <NowPlaying />
    },
    {
        path:"likelibrary",
        element: <LikeLibrary />
    }
])