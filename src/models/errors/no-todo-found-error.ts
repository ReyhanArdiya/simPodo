export default class NoTodoFoundError extends Error {
	constructor() {
		super("Todo not found!");
		this.name = "NoTodoFoundError";
	}
}
