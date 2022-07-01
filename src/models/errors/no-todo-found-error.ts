export default class NoTodoFoundError extends Error {
	constructor() {
		super("Todo not found!");
	}
}
