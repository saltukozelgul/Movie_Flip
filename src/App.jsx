// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import { CategoryPage } from "./pages/CategoryPage";
import { DetailedMoviePage } from "./pages/DetailedMoviePage";

function App() {
  return (
    <Navbar
      children={
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/category/:category" component={CategoryPage}></Route>
          <Route path="/movie/:id" component={DetailedMoviePage}></Route>
        </Switch>
      }
    />
  );
}

export default App;
