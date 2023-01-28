import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Billings from "./Components/Billings/Billings";
import Main from "./Layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Billings></Billings>,
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
