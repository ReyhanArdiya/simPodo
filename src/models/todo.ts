import type Tag from "./tag";

export default class Todo {
	constructor(
		public title: string,
		public completed: boolean = false,
		public readonly tagId: Tag["_id"],
		public readonly _id: string = "",
	) {
		this.title = title;
		this.completed = completed;
		this.tagId = tagId;
		this._id = _id;
	}
}
