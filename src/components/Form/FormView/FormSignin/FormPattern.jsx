import React from 'react';
// import FormPropTypes from '../../FormPropTypes';
import Loader from "../../../Loader";
import {
  FormTitle,
  Input,
  FormSubmitButton,
  FormAdditional,
} from "../../FormComponents";

const FormSignin = (props) => {
  const { functions, properties, onSubmitFunction } = props;
  const { handleInputChange, onSubmitFormHandler } = functions;
  const { submitResponse, errors, values } = properties;

  console.log(errors);

  return (
    <div className="form form__container">
      <form
        className="form__sign-in"
        onSubmit={(event) => onSubmitFormHandler(onSubmitFunction, event)}
      >
        <fieldset disabled={submitResponse}>
          <FormTitle>Вход в систему</FormTitle>

          <Input 
            inputChangeHandler={handleInputChange} 
            value={values.email}
            error={errors.email}
            name="email"
            type="email">
            Электронная почта
          </Input>

          <Input 
            inputChangeHandler={handleInputChange} 
            value={values.password}
            error={errors.password}
            name="password"
            type="password">
            Пароль
          </Input>

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