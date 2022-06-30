import { Schema, Types } from "mongoose";
import type Todo from "../todo";

export interface ITodo extends Omit<Todo, "_id"> {
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
	tagId : {
		type     : String,
		required : true
	},
}, { strict : "throw" });

export default TodoSchema;
