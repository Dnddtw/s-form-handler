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

const FormSignin = (props) => {
  const { handleInputChange, toggleValidAvailable } = props.functions;
  const { submitResponse, email, password } = props.properties;
  const { formURL } = props;

  return (
    <div className="form form__container">
      <form
        className="form__sign-in"
        onSubmit={toggleValidAvailable}>
        <fieldset disabled={submitResponse}>
          <FormTitle>Вход в систему</FormTitle>

          <InputEmail 
            inputChangeHandler={handleInputChange} 
            elementValues={email}
            name="email">
            Электронная почта
          </InputEmail>

          <InputPasswordWithLink 
            inputChangeHandler={handleInputChange} 
            elementValues={password}
            name="password">
            Пароль
          </InputPasswordWithLink>

          <FormSubmitButton> Войти </FormSubmitButton>

          <FormAdditional formURL={formURL}>
            Зарегистрироваться
          </FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

// FormSignin.propTypes = { ...FormPropTypes };
export default FormSignin;