// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        children={
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/dashboard">
              <h1>Dashboard Page</h1>
            </Route>
            <Route path="/components">
              <h1>Components Page</h1>
            </Route>
          </Switch>
        }
      />
    </BrowserRouter>
  );
}

export default App;
