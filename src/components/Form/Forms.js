import React, { Component } from 'react';
import { 
    FormTitle, 
    InputEmail, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    InputPasswordWithLink,
    FormSelect } from './FormComponents';

class FormSignin extends Component {
    render() {
        return (
            <div className="form form__container">
                <form className="form__sign-in">
                    <FormTitle>Вход в систему</FormTitle>    
                    <InputEmail>Электронная почта</InputEmail>
                    <InputPasswordWithLink>Пароль</InputPasswordWithLink>
                    <FormSubmitButton>Войти</FormSubmitButton>
                    <FormAdditional>Зарегистрироваться</FormAdditional>
                </form>
            </div>
        );
    }
};

class FormSignup extends Component {
    render() {
        return (
            <div className="form form__container">
                <form className="form__sign-up">
                    <FormTitle>Регистрация в системе</FormTitle>    
                    <InputEmail>Электронная почта</InputEmail>
                    <InputPassword>Пароль</InputPassword>
                    <InputPassword>Пароль</InputPassword>
                    <FormSelect>Гражданство</FormSelect>
                    <FormSubmitButton>Зарегистрироваться</FormSubmitButton>
                    <FormAdditional>Войти</FormAdditional>
                </form>
            </div>
        );
    }
};

export { FormSignin, FormSignup };