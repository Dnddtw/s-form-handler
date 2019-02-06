import React, { Component } from 'react';
import FormPropTypes from './FormPropTypes';
import Loader from "../Loader";
import {
  FormTitle,
  InputEmail,
  FormSubmitButton,
  FormAdditional,
	InputPasswordWithLink
} from "./FormComponents";

const initialValues = {
  submitResponse: false,
  isValidAvailable: false,
  email: { value: "", error: "", touched: "" },
  password: { value: "", error: "", touched: "" }
};

class FormSignin extends Component {
  state = { ...initialValues };

  _handleInputChange = this.props._handleInputChange.bind(this);
  _toggleValidAvailable = this.props._toggleValidAvailable.bind(this);

  render() {
    const { submitResponse, email, password } = this.state;
    return (
      <div className="form form__container">
        <form
          className="form__sign-in"
          onSubmit={this.toggleValidAvailable}>
          <fieldset disabled={submitResponse}>
            <FormTitle>Вход в систему</FormTitle>

            <InputEmail 
              inputChangeHandler={this._handleInputChange} 
              elementValues={email}
              name="email">
              Электронная почта
            </InputEmail>
  
            <InputPasswordWithLink 
              inputChangeHandler={this._handleInputChange} 
              elementValues={password}
              name="password">
              Пароль
            </InputPasswordWithLink>
  
            <FormSubmitButton> Войти </FormSubmitButton>

            <FormAdditional togglePopupForms={this.props.togglePopupForms}>
              Зарегистрироваться
            </FormAdditional>
  
            {submitResponse && <Loader />}
          </fieldset>
        </form>
      </div>
    );
  }
};

// FormSignin.propTypes = { ...FormPropTypes };
export default FormSignin;