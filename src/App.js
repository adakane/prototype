import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Navbar/Navbar";
import SignIn from "./components/Authentication/Signin";
import HomePage from "./components/HomePage/HomePage";
import Consumer from "./components/HomePage/Consumer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Supplier from "./components/HomePage/Supplier";

function App() {
  return (
    <Router>
      <Example />
      <Supplier />
      <Footer />

      <Switch>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/Consumer">
          <Consumer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
