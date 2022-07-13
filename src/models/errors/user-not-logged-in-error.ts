export default class UserNotLoggedInError extends Error {
	constructor() {
		super("User is not logged in!");
		this.name = "UserNotLoggedInError";
	}
}
