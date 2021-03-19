import React from "react";
import "./index.css";
import BackpackData from "./pack/BackpackData";
import Homepage from "./homepage/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./homepage/Auth/Login";
import Register from "./homepage/Auth/Register";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: true,
    };
  }

  componentDidMount() {
    this.setState({ newUser: false });
  }

  // TODO: check if user has already entered data, and redirect them to /pack.
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/pack">
            <BackpackData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
