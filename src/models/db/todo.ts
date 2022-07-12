import { Schema, Types } from "mongoose";
import Todo from "../base/todo";

export class DBTodo extends Todo {
	constructor(
		title: Todo["title"],
		details: Todo["details"],
		public timeStart: Date,
		completed: Todo["completed"] = false,
		public tagId: string = "",
		public _id: Types.ObjectId = new Types.ObjectId()
	) {
		super(title, details, completed);
	}
}

const TodoSchema = new Schema<DBTodo>({
	title : {
		type     : String,
		required : true,
		trim     : true
	},
	completed : {
		type    : Boolean,
		default : false
	},
	tagId : {
		type     : String,
		required : true,
		trim     : true
	},
	details : {
		type     : String,
		required : true,
		trim     : true
	},
	timeStart : {
		type     : Date,
		required : true
	}
}, { strict : "throw" });

export default TodoSchema;
