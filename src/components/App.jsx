import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from "./Form/FormHandler";
import FormSignin from "./Form/FormView/FormSignin";
import FormSignup from "./Form/FormView/FormSignup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="popup popup__container">
          <Switch>
            <Route path="/register" component={FormSignup}/>
            <Route path="/login" component={FormSignin}/>
            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
