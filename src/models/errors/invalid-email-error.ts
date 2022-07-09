export default class InvalidEmailError extends Error {
	constructor() {
		super("Email is invalid!");
	}
}
