import mongoose, { Types } from "mongoose";
import type { ITag } from "./tag";

export interface IUser {
    username: string;
    email: string;
    token: string;
	localId: string;
	tags: ITag[];
	todos: Types.ObjectId[];
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
	localId : {
		type     : String,
		required : true
	}
}, { strict : "throw" });

class UserSchemaMethods {}
UserSchema.loadClass(UserSchemaMethods);

const User = mongoose.model("User", UserSchema);

export default User;