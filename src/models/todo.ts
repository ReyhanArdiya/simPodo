import { Schema, Types } from "mongoose";
import type { Todo as IsomorphicTodo } from "./interfaces/todo.interface";

export interface ITodo extends Omit<IsomorphicTodo, "_id"> {
	readonly _id: Types.ObjectId;
}

const TodoSchema = new Schema<ITodo>({
	title : {
		type     : String,
		required : true
	},
	completed : {
		type    : Boolean,
		default : false
	},
}, { strict : "throw" });

export default TodoSchema;
