import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { isLogin } from "../libs/auth";
import routes from "./routes";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return !Component ? (
    <Redirect to={routes.joinpage.path} />
  ) : (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Component {...props} />
          <Footer />
        </Fragment>
      )}
    />
  );
};

export default PublicRoute;
