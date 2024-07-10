import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Perfil from "./components/perfil/Perfil";
import Livro from "./components/book/Livro";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/livro",
    element: <Livro />,
  },
]);

function App() {
  return (
    <div className="container">
      <Header />
      <div className="pages">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
