import React from 'react';
// import FormPropTypes from '../FormPropTypes';
import Loader from "../../../Loader";
import {
  FormTitle,
  Input,
  FormSubmitButton,
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
            value={values.value}
            error={errors.error}
            name="email"
            type="email">
            Электронная почта
          </Input>

          <Input
            inputChangeHandler={handleInputChange}
            value={values.value}
            error={errors.error}
            name="password"
            type="password"
            >
            Пароль
          </Input>

          <Input
            inputChangeHandler={handleInputChange}
            value={values.value}
            error={errors.error}
            name="repeatPassword"
            type="password">
            Повторите пароль
          </Input>

          {/* <FormSelect
            inputChangeHandler={handleInputChange}
            name="citizenship"
          >
            Гражданство
          </FormSelect> */}

          <FormCheckbox
            inputChangeHandler={handleInputChange}
            value={values.value}
            error={errors.error}
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