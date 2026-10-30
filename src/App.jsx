import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import WeatherDetails from "./pages/WeatherDetails";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index:true,
          Component:Home
        },
        {
          path: "/about",
          element: <div>about</div>,
        },
        {
          path: "/weather",
          Component:WeatherDetails,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />

};

export default App;