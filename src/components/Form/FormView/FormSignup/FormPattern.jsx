import React from 'react';
// import FormPropTypes from '../FormPropTypes';
import Loader from "../../../Loader";
import {
  FormTitle,
  InputEmail,
  InputPassword,
  FormSubmitButton,
  FormAdditional,
  FormTermOfUse,
  makeElementValuesInObject
} from "../../FormComponents";

const FormPattern = (props) => {
  const { functions, properties } = props;
  const { handleInputChange, onSubmitFormHandler } = functions;
  const { submitResponse } = properties;

  const { 
    email, 
    password, 
    repeatPassword, 
    citizenship, 
    termOfUse 
  } = makeElementValuesInObject(properties);

  return (
    <div className="form form__container">
      <form
        className="form__sign-up"
        onSubmit={(event) => onSubmitFormHandler(props.onSubmitFunction, event)}>

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
            required="required"
            name="termOfUse">
            Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
          </FormTermOfUse>

          <FormSubmitButton>
            Зарегистрироваться
          </FormSubmitButton>

          <FormAdditional formURL="/login">
            Войти
          </FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

// FormSignup.propTypes = { ...FormPropTypes };
export default FormPattern;