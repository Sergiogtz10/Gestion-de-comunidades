import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop";

//Navbar and Footer
import Navbar from "./Navbar/Navbar.jsx";
import { Footer } from "./Footer/footer.jsx";

// Import views
import Home from "../views/home/Home.jsx";
import Login from "../views/LogIn/LogIn.jsx";
import FormAdmin from "../views/FormAdmin/FormAdmin.jsx";
import FormCommunity from "../views/FormCommunity/FormCommunity.jsx";
import FormOwner from "../views/FormOwner/FormOwner.jsx";
import Landing from "../views/Landing/Landing.jsx";
import Profile from "../views/Profile/Profile.jsx";
import Incidencias from "../views/incidencias/Incidencias.jsx";
import IncidenciasOwner from "../views/incidenciasOwner/incidenciasOwner.jsx";
import FormNewIncident from "../views/FormNewIncident/newIncident.jsx";
import FormNewParticularIncident from "../views/FormNewParticularIncident/newParticularIncident.jsx";
import FormFactura from "../views/FormNewBill/NewBill.jsx";
import FormNewExpense from "../views/FormNewExpense/FormNewExpense.jsx";
import Bill from "../views/billDetail/billDetail.jsx";
import ExpensesAndBills from "../views/expensesAndBills/expensesAndBills.jsx";
import HomePage from "../views/HomePage/HomePage.jsx";

import injectContext from "../store/appContext";

//create your first component
const Layout = () => {
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
            <Route exact path="/incidencias/comunidad">
              <Navbar />
              <Incidencias />
            </Route>
            <Route exact path="/incidencias/particulares">
              <Navbar />
              <IncidenciasOwner />
            </Route>
            <Route exact path="/formNuevaIncidencia">
              <Navbar />
              <FormNewIncident />
            </Route>
            <Route exact path="/formNuevaIncidenciaParticular">
              <Navbar />
              <FormNewParticularIncident />
            </Route>
            <Route exact path="/nuevaFactura/:incident_id/:community_id">
              <Navbar />
              <FormFactura />
            </Route>
            <Route exact path="/factura/:bill_id">
              <Navbar />
              <Bill />
            </Route>
            <Route exact path="/facturas">
              <Navbar />
              <ExpensesAndBills />
            </Route>
            <Route exact path="/formNuevoGasto/:community_id">
              <Navbar />
              <FormNewExpense />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <HomePage />
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

export default injectContext(Layout);
