import type ClientUser from "../../models/client/user";
import InvalidUsernameError, { UsernameErrors } from "../../models/errors/invalid-username-error";

const validateUsername = (username: ClientUser["username"], errorCode?: UsernameErrors) => {
	if (errorCode) {
		throw new InvalidUsernameError(errorCode);
	}

	if (!username) {
		throw new InvalidUsernameError(UsernameErrors.EMPTY);
	}

	return true;
};

export default validateUsername;
