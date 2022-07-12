import type { Dayjs } from "dayjs";
import Todo from "../base/todo";

export default class ClientTodo extends Todo {
	constructor(
		title: Todo["title"],
		details: Todo["details"],
		public timeStart: Dayjs,
		completed: Todo["completed"] = false,
		public tagId: string = "",
		public _id = ""
	) {
		super(title, details, completed);
		this.timeStart = timeStart;
	}
}
