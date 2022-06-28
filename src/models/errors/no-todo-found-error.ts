import { Error } from "mongoose";

export default class NoTodoFoundError extends Error.DocumentNotFoundError {
	constructor() {
		super("Todo not found!");
	}
}
