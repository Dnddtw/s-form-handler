import React, { Component } from 'react';
import FormPropTypes from './FormPropTypes';
import Loader from "../Loader";
import {
  FormTitle,
  InputEmail,
  InputPassword,
  FormSubmitButton,
  FormAdditional,
  FormTermOfUse
} from "./FormComponents";

const initialValues = {
  submitResponse: false,
  isValidAvailable: false,
  email: { value: "", error: "", touched: false },
  password: { value: "", error: "", touched: false },
  repeatPassword: { value: "", error: "", touched: false },
  citizenship: { value: "", error: "", touched: false },
  termOfUse: { value: false, error: "", touched: false }
};

class FormSignup extends Component {
  state = { ...initialValues };

  _handleInputChange = this.props_handleInputChange;
  _toggleValidAvailable = this.props_toggleValidAvailable;

  render() {
    const { submitResponse, email, password, repeatPassword, citizenship, termOfUse } = this.state;
    return (
      <div className="form form__container">
        <form
          className="form__sign-up"
          onSubmit={this._toggleValidAvailable}>

          <fieldset disabled={submitResponse}>
            <FormTitle>Регистрация в системе</FormTitle>

            <InputEmail 
              inputChangeHandler={this._handleInputChange} 
              elementValues={email}
              name="email">
              Электронная почта
            </InputEmail>
  
            <InputPassword
              inputChangeHandler={this._handleInputChange}
              elementValues={password}
              name="password">
              Пароль
            </InputPassword>
  
            <InputPassword
              inputChangeHandler={this._handleInputChange}
              elementValues={repeatPassword}
              name="repeatPassword">
              Повторите пароль
            </InputPassword>
  
            {/* <FormSelect
              inputChangeHandler={this._handleInputChange}
              name="citizenship"
            >
              Гражданство
            </FormSelect> */}
  
            <FormTermOfUse
              inputChangeHandler={this._handleInputChange}
              elementValues={termOfUse}
              name="termOfUse">
              Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
            </FormTermOfUse>
  
            <FormSubmitButton>
              Зарегистрироваться
            </FormSubmitButton>

            <FormAdditional togglePopupForms={this.props.togglePopupForms}>
              Войти
            </FormAdditional>
  
            {submitResponse && <Loader />}
          </fieldset>
        </form>
      </div>
    );
  }
};

// FormSignup.propTypes = { ...FormPropTypes };
export default FormSignup;