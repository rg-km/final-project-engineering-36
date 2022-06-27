import React from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
  //   <React.Fragment>
  //     <Navbar />
  //     <Hero />
  //     <Footer />
  //   </React.Fragment>
  // );
}

export default App;
