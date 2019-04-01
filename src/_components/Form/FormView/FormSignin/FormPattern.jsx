import React from 'react';
import { object } from 'prop-types';
import Loader from "../../../Loader";
import {
  Input,
  FormSubmitButton,
  FormAdditional,
} from "../../FormComponents";

const FormSignin = (props) => {
  const { functions, properties } = props;
  const { handleInputChange, onSubmitFormHandler } = functions;
  const { submitResponse, errors, values } = properties;

  return (
    <div className="form form__container">
      <form
        className="form__sign-in"
        onSubmit={onSubmitFormHandler}
      >
        <fieldset disabled={submitResponse}>
          <h1 className="form__title">Вход в систему</h1>

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

          <div>
            <FormSubmitButton>Войти</FormSubmitButton>
          </div>

          <FormAdditional formURL="/register">Зарегистрироваться</FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

FormSignin.propTypes = {
  properties: object.isRequired,
  functions: object.isRequired
};

FormSignin.defaultProps = {};

export default FormSignin;