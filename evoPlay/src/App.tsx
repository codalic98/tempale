import "./App.css";
import Middle from "./components/Middle/Middle";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OneGames from "./components/oneGames/OneGames";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";
const router = createBrowserRouter([
  {
    path: "/oneGames",
    element: <OneGames />,
  },
  {
    path: "/",
    element: <Middle />,
  },
]);
function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
