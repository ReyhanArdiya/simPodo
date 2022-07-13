import type Tag from "./tag";
import type Todo from "./todo";
import type { UserCredential } from "firebase/auth";
import type { DualId } from "./base.interfaces";

interface AuthProviders {
	[authProvider: string]: unknown;

	firebase: {
		local: UserCredential;
	};
}

export default abstract class User {
	public abstract readonly _id: DualId;
	public abstract tags: Map<Tag["_id"], Tag>;
	public abstract todos: Map<Todo["_id"], Todo>;
	public abstract username?: string;

	constructor(
		public authProviders: AuthProviders,
	) {}
}
