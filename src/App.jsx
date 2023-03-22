import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./pages";
import  UsersContext  from "./context/UsersContext";
import  Emailcontext  from "./context/EmailContext";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <Emailcontext>
      <UsersContext>
      <RouterProvider router={router} fallbackElement={<SplashScreen />} />
      </UsersContext>
      </Emailcontext>
    </div>
  );
}

export default App;
