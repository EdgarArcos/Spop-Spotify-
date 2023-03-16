import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="bg-newblack">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
