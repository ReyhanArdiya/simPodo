import InvalidPassError from "../../models/errors/invalid-pass-error";

const validatePass = (p: string): boolean | never => {
	const isTooShort = p.length < 8;
	const isNotAlphanumeric = !/^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i.test(p);
	const noCapital = !/[A-Z]+/.test(p);

	if (isTooShort || isNotAlphanumeric || noCapital) {
		throw new InvalidPassError();
	}

	return true;
};

export default validatePass;
