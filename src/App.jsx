import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <RouterProvider router={router} fallbackElement={<SplashScreen />} />
    </div>
  );
}

export default App;
