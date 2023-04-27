import "./App.css";
import { RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  return <RouterProvider router={PublicRoutes}></RouterProvider>;
}

export default App;
