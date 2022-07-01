import type Tag from "./tag";

export default class Todo {
	constructor(
		public title: string,
		public details: string,
		public timeStart: Date,
		public completed: boolean = false,
		public readonly tagId: Tag["_id"],
		public readonly _id: string = "",
	) {
		this.title = title;
		this.details = details;
		this.timeStart = timeStart;
		this.completed = completed;
		this.tagId = tagId;
		this._id = _id;
	}
}
