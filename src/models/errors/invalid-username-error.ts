export enum UsernameErrors {
    EMPTY,
    TAKEN
}

export default class InvalidUsernameError extends Error {
	constructor(errorCode?: UsernameErrors) {
		let errMsg: string;

		switch (errorCode) {
			case UsernameErrors.EMPTY :
				errMsg = "Username can't be empty!";
				break;
			case UsernameErrors.TAKEN :
				errMsg = "Username is already taken!";
				break;
			default :
				errMsg = "Username is invalid";
				break;
		}

		super(errMsg);
		this.name = "InvalidUsernameError";
	}
}
