export default class UserAlreadyLoggedInError extends Error {
	constructor() {
		super("User is already logged in!");
	}
}
