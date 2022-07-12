import User from "../base/user";
import type ClientTag from "./tag";
import type ClientTodo from "./todo";

export default class ClientUser extends User {
	public _id = "";
	public tags: Map<ClientTag["_id"], ClientTag> = new Map();
	public todos: Map<ClientTodo["_id"], ClientTodo> = new Map();
}
