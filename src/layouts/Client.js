
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import ClientNavbar from "components/Navbars/ClientNavbar.js";
import ClientFooter from "components/Footers/ClientFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const url = location.pathname;

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/client") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
    {
      url === '/client/email' ? " " : 
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/client/index",
          imgSrc: require("../assets/img/brand/favicon.png"),
          imgAlt: "..."
        }} 
      />
    }
      <div className="main-content" ref={mainContent}>
      {
        url === '/client/email' ? '' : 
        <ClientNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
      }
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/client/index" />
        </Switch>
        <Container fluid>
          <ClientFooter />

        </Container>
      </div>
    </>
  );
};

export default Admin;