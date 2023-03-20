import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="bg-newblack min-h-screen h-full text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
