import type { Dayjs } from "dayjs";
import type { DualId } from "./base.interfaces";
import type Tag from "./tag";

export default abstract class Todo {
	public abstract readonly _id: DualId;
	public abstract readonly tagId: Tag["_id"];
	public abstract timeStart: Date | Dayjs;

	constructor(
		public title: string,
		public details: string,
		public completed: boolean = false,
	) {	}
}

