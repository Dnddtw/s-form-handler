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
  email: { value: "", error: "" },
  password: { value: "", error: "" },
  repeatPassword: { value: "", error: "" },
  citizenship: { value: "", error: "" },
  termOfUse: { value: false, error: "" }
};

class FormSignup extends Component {
  state = {...initialValues};

  componentDidMount() {
    console.log(this.props);
  }

  _handleInputChange = this.props._handleInputChange;
  _toggleValidAvailable = this.props._toggleValidAvailable;

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
              required="required" 
              name="email">
              Электронная почта
            </InputEmail>
  
            <InputPassword
              inputChangeHandler={this._handleInputChange}
              elementValues={password}
              required="required"
              name="password">
              Пароль
            </InputPassword>
  
            <InputPassword
              inputChangeHandler={this._handleInputChange}
              elementValues={repeatPassword}
              required="required"
              name="repeatPassword">
              Повторите пароль
            </InputPassword>
  
            {/* <FormSelect
              inputChangeHandler={this._handleInputChange}
              required="required"
              name="citizenship"
            >
              Гражданство
            </FormSelect> */}
  
            <FormTermOfUse
              inputChangeHandler={this._handleInputChange}
              elementValues={termOfUse}
              required="required"
              name="termOfUse">
              Соглашаюсь с
              <a href="#" className="text-blue">
                правилами и условиями сервиса
              </a>
            </FormTermOfUse>
  
            <FormSubmitButton>
              Зарегистрироваться
            </FormSubmitButton>
            {/* <FormAdditional togglePopupForms={togglePopupForms}>
              Войти
            </FormAdditional> */}
  
            {submitResponse && <Loader />}
          </fieldset>
        </form>
      </div>
    );
  }
};

// FormSignup.propTypes = { ...FormPropTypes };
export default FormSignup;