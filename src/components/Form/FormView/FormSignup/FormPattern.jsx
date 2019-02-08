import React from 'react';
import { object } from 'prop-types';
import Loader from "../../../Loader";
import {
  Input,
  FormSubmitButton,
  FormCountrySelect,
  FormAdditional,
  FormCheckbox
} from "../../FormComponents";

const FormPattern = (props) => {
  const { functions, properties } = props;
  const { handleInputChange, onSubmitFormHandler } = functions;
  const { submitResponse, errors, values } = properties;

  return (
    <div className="form form__container">
      <form
        className="form__sign-up"
        onSubmit={onSubmitFormHandler}>

        <fieldset disabled={submitResponse}>
          <h1 className="form__title">Регистрация в системе</h1>

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
            type="password"
            >
            Пароль
          </Input>

          <Input
            inputChangeHandler={handleInputChange}
            value={values.repeatPassword}
            error={errors.repeatPassword}
            name="repeatPassword"
            type="password">
            Повторите пароль
          </Input>

          <FormCountrySelect
            inputChangeHandler={handleInputChange}
            name="citizenship"
            placeholder="Выберите гражданство"
            error={errors.citizenship}>
            Гражданство
          </FormCountrySelect>

          <FormCheckbox
            inputChangeHandler={handleInputChange}
            value={values.termOfUse}
            required="required"
            name="termOfUse">
            Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
          </FormCheckbox>

          <div>
            <FormSubmitButton>Зарегистрироваться</FormSubmitButton>
          </div>

          <FormAdditional formURL="/login">Войти</FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

FormPattern.propTypes = {
  properties: object.isRequired,
  functions: object.isRequired
};

FormPattern.defaultProps = {};

export default FormPattern;