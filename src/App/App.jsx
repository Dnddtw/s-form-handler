import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FormSignin from "../_components/Form/FormView/FormSignin/FormSignin";
import FormSignup from "../_components/Form/FormView/FormSignup/FormSignup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="popup popup__container">
          <Switch>
            <Route path="/register" component={FormSignup} />
            <Route path="/login" component={FormSignin} />
            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
