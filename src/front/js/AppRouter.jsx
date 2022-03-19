import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//Navbar and Footer
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

//Views
import HomePage from "./views/HomePage/HomePage.jsx";
import Home from "./views/home/Home.jsx";
import Login from "./views/LogIn/LogIn.jsx";
import FormAdmin from "./views/FormAdmin/FormAdmin.jsx";
import FormCommunity from "./views/FormCommunity/FormCommunity.jsx";
import FormOwner from "./views/FormOwner/FormOwner.jsx";
import Landing from "./views/Landing/Landing.jsx";
import Profile from "./views/Profile/Profile.jsx";

//create your first component
const AppRouter = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form/admin">
              <FormAdmin />
            </Route>
            <Route exact path="/form/community">
              <FormCommunity />
            </Route>
            <Route exact path="/form/owner/:id">
              <FormOwner />
            </Route>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <HomePage />
              <Footer />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(AppRouter);
