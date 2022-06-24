import mongoose from "mongoose";

export interface IUser {
    username: string;
    email: string;
    token: string;
    localId: string;
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