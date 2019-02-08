import { string, func } from 'prop-types';
import Input from './Input';
import FormAdditional from './FormAdditional';
import FormSubmitButton from './FormSubmitButton';
import FormTitle from './FormTitle';
import FormCheckbox from './FormCheckbox';

// export const InputPasswordWithLink = props => {
//   const {
//     name,
//     required,
//     inputChangeHandler,
//     value,
//     error,
//     forName
//   } = props;

//   return (
//     <div className="form__element">
//       <div className="form__flex">
//         <FormLabel name={forName}> {props.children} </FormLabel>
//         <a href="#" className="form__link">
//           Забыли пароль?
//         </a>
//       </div>
//       <input
//         type="password"
//         className={`form__input ${error ? "invalid" : ""}`}
//         onChange={event => inputChangeHandler({ name }, event)}
//         id={forName}
//         required={required}
//         autoComplete="off"
//         name={name}
//         value={value}
//       />
//       {error && <InputInvalidText>{error}</InputInvalidText>}
//     </div>
//   );
// };

const InputPropTypes = {
	name: string.isRequired,
	handleInputChange: func.isRequired,
	getFormElementValues: func.isRequired,
	required: string
}

// InputEmail.propTypes = { ...InputPropTypes };
// InputPassword.propTypes = { ...InputPropTypes };
// InputPasswordWithLink.propTypes = { ...InputPropTypes };
// FormSelect.propTypes = { ...InputPropTypes };
// FormTermOfUse.propTypes = { ...InputPropTypes };

FormSubmitButton.propTypes = {
	// formID: string.isRequired
};

FormAdditional.propTypes = {
	// togglePopupForms: func.isRequired
};

export { 
  Input, 
  FormSubmitButton, 
  FormTitle, 
  FormAdditional, 
  FormCheckbox 
};