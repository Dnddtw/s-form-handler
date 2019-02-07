import React from 'react';
// import FormPropTypes from '../../FormPropTypes';
import Loader from "../../../Loader";
import {
  FormTitle,
  InputEmail,
  FormSubmitButton,
  FormAdditional,
  InputPasswordWithLink,
  makeElementValuesInObject
} from "../../FormComponents";



const FormSignin = (props) => {
  const { functions, properties } = props;
  const { handleInputChange, onSubmitFormHandler } = functions;
  const { submitResponse } = properties;

  const { email, password } = makeElementValuesInObject(properties);

  return (
    <div className="form form__container">
      <form
        className="form__sign-in"
        onSubmit={(event) => onSubmitFormHandler(props.onSubmitFunction, event)}>
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

          <FormAdditional formURL="/register">
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