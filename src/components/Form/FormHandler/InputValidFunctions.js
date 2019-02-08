import errorMessage from '../../../text/text.json';

export const validEmail = value => {
    // Valid function
    const emailValidRegExp = /\S+@\S+\.\S+/;

		if (value.length === 0) { return errorMessage.email.empty; } 
		else if (!emailValidRegExp.test(value)) { return errorMessage.email.invalid; }

    return "";
};

export const validPassword = value => {
    // Valid function
    return value.length === 0 ? errorMessage.password.empty : "";
};

export const fieldRequired = value => (value.length === 0 ? errorMessage.required : "");

const validHandler = (value, validateScheme) => {  
    if (!validateScheme) { return false; }

    for (let i = 0; i < validateScheme.length; i++ ) {
        const error = validateScheme[i](value);
        if (error) { return error }
    }

    return false;
};

export default validHandler;