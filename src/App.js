import React, { Component, Suspense, lazy } from "react";
import AppBar from "./components/AppBar";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { authOperations } from "./redux/auth";

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
            <Route exact path="/" component={HomeView} />
            <Route exact path="/contacts-list" component={ContactsListView} />
            <Route exact path="/contacts-add" component={AddContactsView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Route component={HomeView} />
            {/* <PublicRoute
              path="/login"
              restricted
              redirectTo="/todos"
              component={LoginView}
            />
            <PrivateRoute
              path="/todos"
              redirectTo="/login"
              component={TodosView}
            /> */}
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
