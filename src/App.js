import React, { Component, Suspense, lazy } from "react";
import AppBar from "./components/AppBar/";
import { Switch } from "react-router-dom";
import Container from "./components/Container";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { authOperations } from "./redux/auth";
import PublicRoute from "./components/PublicRoute/";
import PrivateRoute from "./components/PrivateRoute/";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactsListView = lazy(() => import("./views/ContactsListView"));
const AddContactsView = lazy(() => import("./views/AddContactsView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              className="Loader-main"
              type="Bars"
              color="#45a049"
              height={50}
              width={50}
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PrivateRoute
              exact
              path="/contacts-list"
              component={ContactsListView}
              redirectTo="/login"
            />
            <PrivateRoute
              exact
              path="/contacts-add"
              component={AddContactsView}
              redirectTo="/login"
            />
            <PublicRoute
              path="/register"
              component={RegisterView}
              restricted
              redirectTo="/"
            />
            <PublicRoute
              path="/login"
              component={LoginView}
              restricted
              redirectTo="/"
            />
            <PublicRoute component={HomeView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
