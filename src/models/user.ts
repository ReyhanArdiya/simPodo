import mongoose from "mongoose";
import Tag, { ITag } from "./tag";
import type { ITodo } from "./todo";

export interface IUser {
    username: string;
    email: string;
    token: string;
    _id: string;
	tags: {
		[tagId: ITag["id"]] : ITag;
	};
	todos: {
		[todoId: ITodo["_id"]] : ITodo;
	};
}

const UserSchema = new mongoose.Schema<IUser>({
	username : {
		type     : String,
		required : true
	},
	email : {
		type     : String,
		required : true
	},
	token : {
		type     : String,
		required : true
	},
	tags : {
		required : true,
		type     : Map,
		of       : Tag
	},
	todos : {
		type : Map,
		of   : {
			type : "ObjectId",
			ref  : "Todo"
		}
	}
}, { strict : "throw" });

class UserSchemaMethods {}
UserSchema.loadClass(UserSchemaMethods);

const User = mongoose.model("User", UserSchema);

export default User;