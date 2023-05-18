import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedAdmin } from "./ProtectedAdmin";
import { ProtectedAdminRoute } from "./ProtectedAdminRoute";
import { ProtectedArtist } from "./ProtectedArtist";
import { Login, Errorpage } from "../pages";
import PlaylistAnotherUser from "../components/PlaylistAnotherUser/PlaylistAnotherUser";

const Home = lazy(() => import("../pages/Home"));
const Artistprofile = lazy(() => import("../pages/Artistprofile"));
const Profile = lazy(() => import("../pages/Profile"));
const ProfileAnotherUser = lazy(() =>
  import("../components/Profile/ProfileAnotherUser")
);
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
const Admin = lazy(() => import("./../components/Admin/Admin"));
const ContainerResultsByGenre = lazy(() =>
  import("./../components/SearchPage/ContainerResultsByGenre")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ContainerAllGenres />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <SearchResultsContainer />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "/search/playlist/:playlistId",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <PlaylistAnotherUser />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "/search/:genre",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ContainerResultsByGenre />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "library",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <MainContainerLibrary />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "likelibrary",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ContainerLikeLibrary />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "nowplaying",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <NowPlaying />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "playlist/:id",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <CreateList />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "artist",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedArtist>
              <ProtectedAdminRoute>
                <Artistprofile />
              </ProtectedAdminRoute>
            </ProtectedArtist>
          </Suspense>
        ),
      },
      {
        path: "artist/:id",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <Artistprofile />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <Profile />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "profile/:userId",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ProfileAnotherUser />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          </Suspense>
        ),
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
  {
    path: "admin",
    element: (
      <Suspense fallback={<></>}>
        <ProtectedAdmin>
          <Admin />
        </ProtectedAdmin>
      </Suspense>
    ),
  },
]);
