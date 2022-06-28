export default class Todo {
	constructor(
		public title: string,
		public completed: boolean = false,
		public readonly _id: string = "",
	) {
		this.title = title;
		this.completed = completed;
		this._id = _id;
	}
}