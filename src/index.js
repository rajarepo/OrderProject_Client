
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/OrderProject-dashboard.scss";

import AdminLayout from "layouts/Admin.js";
import ClientLayout from "layouts/Client.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <ClientLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/user/index" />
    </Switch>
  </BrowserRouter>
);
