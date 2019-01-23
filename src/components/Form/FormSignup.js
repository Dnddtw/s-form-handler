import React from 'react';
import FormPropTypes from './FormPropTypes';
import Loader from "../Loader";
import {
  FormTitle,
  InputEmail,
  InputPassword,
  FormSubmitButton,
  FormAdditional,
  FormTermOfUse,
	FormSelect,
	_getInputProps
} from "./FormComponents";



const FormSignup = (props) => {
	const inputComponentProps = _getInputProps(props);
  const {
    formID,
    togglePopupForms,
    submitResponse = true,
    toggleValidAvailable
  } = props;

  return (
    <div className="form form__container">
      <form
        className="form__sign-up"
        onSubmit={event => toggleValidAvailable(formID, event)}
      >
        <fieldset disabled={submitResponse}>
          <FormTitle>Регистрация в системе</FormTitle>
          <InputEmail {...inputComponentProps} required="required" name="email">
            Электронная почта
          </InputEmail>

          <InputPassword
            {...inputComponentProps}
            required="required"
            name="password"
          >
            Пароль
          </InputPassword>

          <InputPassword
            {...inputComponentProps}
            required="required"
            name="repeatPassword"
          >
            Повторите пароль
          </InputPassword>

          <FormSelect
            {...inputComponentProps}
            required="required"
            name="citizenship"
          >
            Гражданство
          </FormSelect>

          <FormTermOfUse
            {...inputComponentProps}
            required="required"
            name="termOfUse"
          >
            Соглашаюсь с{" "}
            <a href="#" className="text-blue">
              правилами и условиями сервиса
            </a>
          </FormTermOfUse>

          <FormSubmitButton formID={formID}>
            {" "}
            Зарегистрироваться{" "}
          </FormSubmitButton>
          <FormAdditional togglePopupForms={togglePopupForms}>
            Войти
          </FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

FormSignup.propTypes = { ...FormPropTypes };
export default FormSignup;