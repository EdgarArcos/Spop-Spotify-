import { createBrowserRouter } from "react-router-dom";
import { ContainerAllGenres } from "../components/HomePage";
import { MainContainerLibrary } from "../components/LibraryPage";
import { ContainerLikeLibrary } from "../components/LikeLibrary/ContainerLikeLibrary";
import { SearchResultsContainer } from "../components/SearchPage";
import {
  NowPlaying,
  Home,
  Login,
  EditProfile,
  Profile,
  Register,
  ResetPassword,
  Errorpage,
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
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "editprofile",
    element: <EditProfile />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);
