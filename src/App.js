import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Navbar/Navbar";
import SignIn from "./components/Authentication/Signin";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/HomePage/Testimonials";

function App() {
  return (
    <Router>
      <Example />
      <HomePage />
      <Footer />
      <Switch></Switch>
    </Router>
  );
}

export default App;
