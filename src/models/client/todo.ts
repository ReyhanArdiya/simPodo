import Todo from "../base/todo";

export default abstract class ClientTodo extends Todo {
	constructor(
		title: Todo["title"],
		details: Todo["details"],
		timeStart: Todo["timeStart"],
		completed: Todo["completed"] = false,
		public tagId: string = "",
		public _id = ""
	) {
		super(title, details, timeStart, completed);
	}
}
