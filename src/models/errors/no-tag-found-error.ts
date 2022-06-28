import { Error } from "mongoose";

export default class NoTagFoundError extends Error.DocumentNotFoundError {
	constructor() {
		super("Tag not found!");
	}
}
