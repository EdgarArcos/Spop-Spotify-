import { createBrowserRouter } from "react-router-dom";
import { ContainerAllGenres } from "../components/HomePage";
import { MainContainerLibrary } from "../components/LibraryPage";
import { ContainerLikeLibrary } from "../components/LikeLibrary/ContainerLikeLibrary";
import { SearchResultsContainer } from "../components/SearchPage";
import {
  NowPlaying,
  Home,
  SplashScreen,
  Login,
  Profile,
  Register,
  ResetPassword,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <ContainerAllGenres />,
      },
      {
        path: "search",
        element: <SearchResultsContainer />,
      },
      {
        path: "library",
        element: <MainContainerLibrary />,
      },
      {
        path: "likelibrary",
        element: <ContainerLikeLibrary />,
      },
      {
        path: "nowplaying",
        element: <NowPlaying />,
      },
    ],
  },
  {
    path: "splashscreen",
    element: <SplashScreen />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "resetpassword",
    element: <ResetPassword />,
  },
]);
