import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import { MusicProvider } from "./context/MusicContext/MusicProvider";
import { UsersProvider } from "./context/UsersContext";
import { SongProvider } from "./context/SongContext/SongContext";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <SongProvider>
        <UsersProvider>
          <MusicProvider>
            <RouterProvider router={router} fallbackElement={<SplashScreen />} />
            <Toaster />
          </MusicProvider>
        </UsersProvider>
      </SongProvider>
    </div>
  );
}

export default App;
