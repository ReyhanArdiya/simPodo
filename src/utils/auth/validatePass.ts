import InvalidPassError, { PassErrors, PassReqs } from "../../models/errors/invalid-pass-error";

const validatePass = (p: string): boolean | never => {
	const isTooShort = p.length < PassReqs.MIN_LENGTH;
	const isNotAlphanumeric = !/^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i.test(p);
	const noCapital = !/[A-Z]+/.test(p);

	if (isTooShort) {
		throw new InvalidPassError(PassErrors.TOO_SHORT);
	} else if (isNotAlphanumeric) {
		throw new InvalidPassError(PassErrors.NOT_ALPHANUMERIC);
	} else if (noCapital) {
		throw new InvalidPassError(PassErrors.NO_CAPITAL);
	}

	return true;
};

export default validatePass;
