import type { DualId } from "./base.interfaces";
import type Tag from "./tag";

export default abstract class Todo {
	public abstract readonly _id: DualId;
	public abstract readonly tagId: Tag["_id"];

	constructor(
		public title: string,
		public details: string,
		public timeStart: Date,
		public completed: boolean = false,
	) {	}
}

