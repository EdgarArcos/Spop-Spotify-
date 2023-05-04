import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import { MusicProvider } from "./context/MusicContext/MusicProvider";
import { UsersProvider } from "./context/UsersContext";
import { SongProvider } from "./context/SongContext/SongContext";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <SongProvider>
        <UsersProvider>
          <MusicProvider>
            <RouterProvider router={router} fallbackElement={<SplashScreen />} />
          </MusicProvider>
        </UsersProvider>
      </SongProvider>
    </div>
  );
}

export default App;
