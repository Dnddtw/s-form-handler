import { string, func, bool } from 'prop-types';


export default {
	formID: string.isRequired,
  togglePopupForms: func.isRequired,
  toggleValidAvailable: func.isRequired,
  submitResponse: bool
};