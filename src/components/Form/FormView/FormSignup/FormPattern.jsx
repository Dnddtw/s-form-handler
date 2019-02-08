import React from 'react';
// import FormPropTypes from '../FormPropTypes';
import Loader from "../../../Loader";
import {
  FormTitle,
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
        onSubmit={(event) => onSubmitFormHandler(props.onSubmitFunction, event)}>

        <fieldset disabled={submitResponse}>
          <FormTitle>Регистрация в системе</FormTitle>

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