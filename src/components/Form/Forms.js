import React, { Component } from 'react';
import { 
    FormTitle, 
    InputEmail, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    FormTermOfUse,
    InputPasswordWithLink,
    FormSelect } from './FormComponents';

const FormSignin = (props) => {
    const { formID, handleInputChange, getFormElementValue, togglePopupForms } = props;

    return (
        <div className="form form__container">
            <form className="form__sign-in">
                <FormTitle>Вход в систему</FormTitle>    

                <InputEmail 
                    handleInputChange={handleInputChange}
                    getFormElementValue={getFormElementValue} 
                    formID={formID}
                    name="email"> 
                    Электронная почта 
                </InputEmail>

                <InputPasswordWithLink
                    handleInputChange={handleInputChange}
                    getFormElementValue={getFormElementValue} 
                    formID={formID}
                    name="password"> 
                    Пароль
                </InputPasswordWithLink>

                <FormSubmitButton>Войти</FormSubmitButton>

                <FormAdditional togglePopupForms={togglePopupForms}>Зарегистрироваться</FormAdditional>
            </form>
        </div>
    );
};

const FormSignup = (props) => {
    const { formID, handleInputChange, getFormElementValue, togglePopupForms } = props;

    return (
        <div className="form form__container">
            <form className="form__sign-up">
                <FormTitle>Регистрация в системе</FormTitle> 

                <InputEmail 
                    handleInputChange={handleInputChange}
                    getFormElementValue={getFormElementValue} 
                    formID={formID}
                    name="email"> 
                    Электронная почта 
                </InputEmail>

                <InputPassword
                    handleInputChange={handleInputChange} 
                    getFormElementValue={getFormElementValue}
                    formID={formID}
                    name="password">
                    Пароль
                </InputPassword>

                <InputPassword
                    handleInputChange={handleInputChange} 
                    getFormElementValue={getFormElementValue}
                    formID={formID}
                    name="repeatPassword">
                    Повторите пароль
                </InputPassword>

                <FormSelect
                    name="citizenship"
                    formID={formID}
                    handleInputChange={handleInputChange}
                    getFormElementValue={getFormElementValue}>
                    Гражданство
                </FormSelect>

                <FormTermOfUse
                    name="term-of-use"
                    formID={formID}
                    handleInputChange={handleInputChange}
                    getFormElementValue={getFormElementValue}>
                    Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
                </FormTermOfUse>

                <FormSubmitButton>Зарегистрироваться</FormSubmitButton>

                <FormAdditional togglePopupForms={togglePopupForms}>Войти</FormAdditional>
            </form>
        </div>
    );
};

export { FormSignin, FormSignup };