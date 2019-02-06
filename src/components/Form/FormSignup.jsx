import React from 'react';
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

const FormSignup = (props) => {
  const { handleInputChange, toggleValidAvailable } = props.functions;
  const { 
    submitResponse, 
    email, 
    password, 
    repeatPassword, 
    citizenship, 
    termOfUse 
  } = props.properties;

  return (
    <div className="form form__container">
      <form
        className="form__sign-up"
        onSubmit={toggleValidAvailable}>

        <fieldset disabled={submitResponse}>
          <FormTitle>Регистрация в системе</FormTitle>

          <InputEmail 
            inputChangeHandler={handleInputChange} 
            elementValues={email}
            name="email">
            Электронная почта
          </InputEmail>

          <InputPassword
            inputChangeHandler={handleInputChange}
            elementValues={password}
            name="password">
            Пароль
          </InputPassword>

          <InputPassword
            inputChangeHandler={handleInputChange}
            elementValues={repeatPassword}
            name="repeatPassword">
            Повторите пароль
          </InputPassword>

          {/* <FormSelect
            inputChangeHandler={handleInputChange}
            name="citizenship"
          >
            Гражданство
          </FormSelect> */}

          <FormTermOfUse
            inputChangeHandler={handleInputChange}
            elementValues={termOfUse}
            name="termOfUse">
            Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
          </FormTermOfUse>

          <FormSubmitButton>
            Зарегистрироваться
          </FormSubmitButton>

          <FormAdditional togglePopupForms={props.togglePopupForms}>
            Войти
          </FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

// FormSignup.propTypes = { ...FormPropTypes };
export default FormSignup;