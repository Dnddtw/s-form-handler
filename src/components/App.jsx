import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from "./Form";
import FormSignin from "./Form/FormSignin";
import FormSignup from "./Form/FormSignup";

const initialSignupValues = {
  email: { value: "", error: "", touched: false },
  password: { value: "", error: "", touched: false },
  repeatPassword: { value: "", error: "", touched: false },
  citizenship: { value: "", error: "", touched: false },
  termOfUse: { value: false, error: "", touched: false }
};

const initialSigninValues = {
  submitResponse: false,
  isValidAvailable: false,
  email: { value: "", error: "", touched: "" },
  password: { value: "", error: "", touched: "" }
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="popup popup__container">
          <Switch>
            <Route path="/register" render={() => (
              <Form initialFormValues={initialSignupValues}>
              {(renderProps) => (
                  <FormSignup 
                    formURL="/login"
                    {...renderProps} />
              )}
              </Form>
            )}/>

            <Route path="/login" render={() => (
              <Form initialFormValues={initialSigninValues}>
              {(renderProps) => (
                  <FormSignin 
                    formURL="/register"
                    {...renderProps} />
              )}
              </Form>
            )}/>

            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
