import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import { MusicProvider } from "./context/MusicContext/MusicProvider";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <UsersProvider>
        <MusicProvider>
          <RouterProvider router={router} fallbackElement={<SplashScreen />} />
        </MusicProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
