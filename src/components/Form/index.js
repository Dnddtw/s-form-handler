import React, { Component } from 'react';
import { FormTitle, InputEmail, InputPassword, FormSubmitButton, FormAdditional } from './FormComponents';

class Form extends Component {
    render() {
        return (
            <div className="form form__container">
                <form className="form__sign-in">
                    <FormTitle>Вход в систему</FormTitle>    
                    <InputEmail>Электронная почта</InputEmail>
                    <InputPassword>Пароль</InputPassword>
                    <FormSubmitButton>Войти</FormSubmitButton>
                    <FormAdditional>Зарегистрироваться</FormAdditional>
                </form>
            </div>
        );
    }
};

export default Form;