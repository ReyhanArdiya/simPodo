import isEmail from "@nickgatzos/is-email";
import InvalidEmailError from "../../models/errors/invalid-email-error";

const validateEmail = (e: string): boolean | never => {
	// @ts-expect-error: the typing from them is wrong, how to fix it?
	if (isEmail(e)) {
		return true;
	}

	throw new InvalidEmailError();
};

export default validateEmail;
