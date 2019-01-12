import React from 'react';

const FormLabel = (props) => {
    return <label htmlFor={`${props.name}`} className="form__label"> {props.children} </label>
}

const InputInvalidText = (props) => {
    return <p className="form__invalid"> {props.children} </p>
}

const InputEmail = (props) => {
    const { formID, name, required = false, handleInputChange, getFormElementValues } = props;

    const formElementData = getFormElementValues(formID, name);
    const value = formElementData.valuel
    const ifError = formElementData.valueInvalid;

    const forName = `${formID}-${name}`;
    
    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <input 
                type="email" 
                onChange={(event) => handleInputChange(formID, { name }, event)} 
                className={`form__input ${ifError ? 'invalid' : ''}`}
                id={forName} 
                required={required}
                autoComplete="off"
                name={name}
                value={value}
            />
            {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
        </div>
    );
};

const InputPassword = (props) => {
    const { formID, name, required = false, handleInputChange, getFormElementValues } = props;
    
    const formElementData = getFormElementValues(formID, name);
    const value = formElementData.valuel
    const ifError = formElementData.valueInvalid;

    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <input 
                type="password" 
                className={`form__input ${ifError ? 'invalid' : ''}`}
                onChange={(event) => handleInputChange(formID, { name }, event)}
                id={forName} 
                required={required}
                autoComplete="off"
                name={name}
                value={value}
            />
            {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
        </div>
    );
};

const InputPasswordWithLink = (props) => {
    const { formID, name, required = false, handleInputChange, getFormElementValues } = props;
    
    const formElementData = getFormElementValues(formID, name);
    const value = formElementData.valuel
    const ifError = formElementData.valueInvalid;

    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <div className="form__flex">
                <FormLabel name={forName}> {props.children} </FormLabel>
                <a href="#" className="form__link">Забыли пароль?</a>    
            </div>
            <input 
                type="password" 
                className={`form__input ${ifError ? 'invalid' : ''}`}
                onChange={(event) => handleInputChange(formID, { name }, event)}
                id={forName} 
                required={required}
                autoComplete="off"
                name={name}
                value={value}
            />
            {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
        </div>
    );
};

const FormTitle = (props) => {
    return <h1 className="form__title">{props.children}</h1>   
};

const FormSubmitButton = (props) => {
    const { formID, toggleValidAvailable } = props;
    
    return (
        <div>
            <button 
                type="submit" 
                className="form__submit"
                onSubmit={(event) => toggleValidAvailable(formID, event)}>
                {props.children}
            </button>
        </div>
    );
};

const FormAdditional = (props) => {
    const { togglePopupForms } = props;

    return (
        <div className="popup__additional">
            <button className="popup__link" onClick={togglePopupForms}> {props.children} </button>
        </div>
    );
};

const FormSelect = (props) => {
    const { formID, name, handleInputChange, getFormElementValues } = props;
    
    const formElementData = getFormElementValues(formID, name);
    const value = formElementData.valuel
    const ifError = formElementData.valueInvalid;

    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <div className="select-container">
                <select 
                    name={name} 
                    id={forName}  
                    className="form__select"
                    onChange={(event) => handleInputChange(formID, { name }, event)}
                    value={value}>

                    <option value="1111">1111</option>
                    <option value="2222">2222</option>
                    <option value="3333">3333</option>
                </select>
            </div>
        </div>
    );
};

const FormTermOfUse = (props) => {
    const { formID, name, required = false, handleInputChange, getFormElementValues } = props;
    
    const formElementData = getFormElementValues(formID, name);
    const value = formElementData.valuel
    const ifError = formElementData.valueInvalid;

    const forName = `${formID}-${name}`;

    return (
        <div className="form__element checkbox">
            <label htmlFor={forName} className="checkbox__label">
                <input 
                    type="checkbox" 
                    name={name} 
                    required={required}
                    id={forName} 
                    autoComplete="off"
                    className="checkbox__checkbox" 
                    onChange={(event) => handleInputChange(formID, { name }, event)}
                    value={value}
                />
                <span className="checkbox__checkmark"></span> {props.children}
            </label>
        </div>
    );
};

export { 
    InputEmail, 
    FormTitle, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    InputPasswordWithLink,
    FormSelect,
    FormTermOfUse
};