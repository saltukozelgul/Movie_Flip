// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import { CategoryPage } from "./pages/CategoryPage";
import { DetailedMoviePage } from "./pages/DetailedMoviePage";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navbar children={<HomePage />} />}
      ></Route>
      <Route
        path="/category/:category"
        element={<Navbar children={<CategoryPage />} />}
      ></Route>
      <Route
        path="/movie/:id"
        element={<Navbar children={<DetailedMoviePage />} />}
      ></Route>
    </Routes>
  );
}

export default App;
