import { Schema, Types } from "mongoose";
import type Todo from "../base/todo";

export interface ITodo extends Omit<Todo, "_id" > {
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
	details : {
		type     : String,
		required : true
	},
	timeStart : {
		type     : Date,
		required : true
	}
}, { strict : "throw" });

export default TodoSchema;
