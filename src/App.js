import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Main from "./Layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <TopBar></TopBar>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
