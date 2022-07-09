export default class InvalidPassError extends Error {
	constructor() {
		super("Password is invalid!");
	}
}
