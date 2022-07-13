export enum PassReqs {
	MIN_LENGTH = 8,
}

export enum PassErrors {
	TOO_SHORT,
	NOT_ALPHANUMERIC,
	NO_CAPITAL
}

export default class InvalidPassError extends Error {
	constructor(errorCode: PassErrors) {
		let errMsg: string;

		switch (errorCode) {
			case PassErrors.TOO_SHORT :
				errMsg = `Password must be at least ${PassReqs.MIN_LENGTH} characters`;
				break;
			case PassErrors.NOT_ALPHANUMERIC :
				errMsg = "Password must contain numbers and letters";
				break;
			case PassErrors.NO_CAPITAL :
				errMsg = "Password must contain one capital letter";
				break;
			default :
				errMsg = "Password is invalid";
				break;
		}

		super(errMsg);
		this.name = "InvalidPassError";
	}
}
