import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import { MusicProvider } from "./context/MusicContext/MusicProvider";
import { UsersProvider } from "./context/UsersContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SongProvider } from "./context/SongContext/SongContext";
import { Toaster } from "react-hot-toast";
function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-newblack min-h-screen h-full w-full text-white">
      <SongProvider>
        <UsersProvider>
          <MusicProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider
                router={router}
                fallbackElement={<SplashScreen />}
              />
              <Toaster />
            </QueryClientProvider>
          </MusicProvider>
        </UsersProvider>
      </SongProvider>
    </div>
  );
}

export default App;
