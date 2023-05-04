import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import { MusicProvider } from "./context/MusicContext/MusicProvider";
import { UsersProvider } from "./context/UsersContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <UsersProvider>
        <MusicProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider
              router={router}
              fallbackElement={<SplashScreen />}
            />
          </QueryClientProvider>
        </MusicProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
