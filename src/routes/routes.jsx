import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home, Login, Errorpage } from "../pages";
import { Admin } from "./../components/Admin/Admin";

const Artistprofile = lazy(() => import("../pages/Artistprofile"));
const Profile = lazy(() => import("../pages/Profile"));
const SearchResultsContainer = lazy(() =>
  import("../components/SearchPage/SearchResultsContainer")
);
const MainContainerLibrary = lazy(() =>
  import("../components/LibraryPage/MainContainerLibrary")
);
const ContainerLikeLibrary = lazy(() =>
  import("../components/LikeLibrary/ContainerLikeLibrary")
);
const NowPlaying = lazy(() => import("../pages/NowPlaying"));
const CreateList = lazy(() => import("../components/CreateList/CreateList"));
const ContainerAllGenres = lazy(() =>
  import("../components/HomePage/ContainerAllGenres")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <Home />,
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ContainerAllGenres />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <SearchResultsContainer />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "library",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <MainContainerLibrary />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "likelibrary",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ContainerLikeLibrary />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "nowplaying",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <NowPlaying />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "playlist/:id",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <CreateList />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "artist",
        element: (
          <Suspense fallback={<></>}>
            {/* Cambiar protectedRoute por autentificacion de rol ya que solo pueden entrar artistas */}
            <ProtectedRoute>
              <Artistprofile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "artist/:id",
        element: (
          <Suspense fallback={<></>}>
            {/* Cambiar protectedRoute por autentificacion de rol ya que solo pueden entrar artistas */}
            <ProtectedRoute>
              <Artistprofile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);
