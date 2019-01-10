import React from 'react';

const InputEmail = (props) => {
    // const { type = "email" } = props;
    // const { error } = { props };

    // const validError = error ? props

    return (
        <div className="form__element">
            <label htmlFor="email-input" className="form__label"> {props.children} </label>
            <input type="email" placeholder="usermail@example.com" className="form__input" id="email-input"/>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const InputPassword = (props) => {
    return (
        <div className="form__element">
            <label htmlFor="password" className="form__label"> {props.children} </label>
            <input type="password" className="form__input" id="password" placeholder="•••••••••••"/>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const FormTitle = (props) => {
    const { title } = props;

    return <h1 className="form__title">{props.children}</h1>   
}

const FormSubmitButton = (props) => {
    return (
        <div className="">
            <button className="form__submit">{props.children}</button>
        </div>
    );
}

const FormAdditional = (props) => {
    return (
        <div className="popup__additional">
            <div className="popup__link">{props.children}</div>
        </div>
    );
}

export { InputEmail, FormTitle, InputPassword, FormSubmitButton, FormAdditional };
export default FormTitle;
