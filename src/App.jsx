import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import  UsersContext  from "./context/UsersContext";
import  Emailcontext  from "./context/EmailContext";
import { MusicProvider } from "./context/MusicContext/MusicProvider";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <Emailcontext>
      <UsersContext>
      <MusicProvider>
      <RouterProvider router={router} fallbackElement={<SplashScreen />} />
      </MusicProvider>
      </UsersContext>
      </Emailcontext>
    </div>
  );
}

export default App;
