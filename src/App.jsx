import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";


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
      ]
    },
  ]);

  return <RouterProvider router={router} />

};

export default App;