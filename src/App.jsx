import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import  UsersContext  from "./context/UsersContext";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <UsersContext>
      <RouterProvider router={router} />
      </UsersContext>
    </div>
  );
}

export default App;
