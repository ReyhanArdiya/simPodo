import type { UserCredential } from "firebase/auth";
import mongoose, { HydratedDocument, Model, model, Schema, Types } from "mongoose";
import replaceO1 from "../../utils/replaceO1";
import type Tag from "../base/tag";
import type Todo from "../base/todo";
import IUser from "../base/user";
import NoTagFoundError from "../errors/no-tag-found-error";
import NoTodoFoundError from "../errors/no-todo-found-error";
import TagSchema, { DBTag } from "./tag";
import TodoSchema, { DBTodo } from "./todo";

export class DBUser extends IUser {
	public tags: Types.Map<DBTag> = new Types.Map();
	public todos: Types.Map<DBTodo> = new Types.Map();
	public _id: Types.ObjectId = new Types.ObjectId();
	public username?: string;
	constructor(
		public authProviders: { firebase: { local: { user: Pick<UserCredential["user"], "uid"> } } }
	) {
		super();
	}
}

export interface UserInstanceMethods {
	addTag(tag: Omit<Tag | DBTag, "_id">): Promise<DBTag>;
	deleteTag(tagId: Tag["_id"] | DBTag["_id"]): Promise<DBTag>;
	updateTag(newTagData: Tag | DBTag): Promise<DBTag>;

	addTodo(todo: Omit<Todo | DBTodo, "_id">): Promise<DBTodo>;
	deleteTodo(todoId: Todo["_id"] | DBTodo["_id"]): Promise<DBTodo>;
	updateTodo(newTodoData: Todo | DBTodo): Promise<DBTodo>;
}

type UserModel = Model<DBUser, Record<string, never>, UserInstanceMethods>;

export type UserDoc = HydratedDocument<DBUser, UserInstanceMethods>;

const UserSchema = new Schema<DBUser, UserModel, UserInstanceMethods>(
	{
		username : {
			type   : String,
			trim   : true,
			unique : true,
			index  : true,
			sparse : true
		},
		tags : {
			default : {},
			type    : Map,
			of      : TagSchema
		},
		todos : {
			default : {},
			type    : Map,
			of      : TodoSchema
		},
		authProviders : {
			firebase : {
				type : {
					local : Map
				},
				required : true
			}
		}
	},
	{ strict : "throw" }
);

const stringifyId = (id: string | Types.ObjectId) => typeof id === "string" ? id : id.toString();

class UserSchemaMethods implements UserInstanceMethods {
	public async addTag(
		this: UserDoc,
		tag: Omit<DBTag, "_id">
	): Promise<DBTag> {
		const newTag: DBTag = {
			...tag,
			_id : new Types.ObjectId()
		};

		this.tags.set(newTag._id.toString(), newTag);

		await this.save();

		return newTag;
	}

	public async deleteTag(
		this: UserDoc,
		tagId: DBTag["_id"]
	): Promise<DBTag> {
		const id = stringifyId(tagId);

		const toBeDeletedTag = this.tags.get(id);
		if (!toBeDeletedTag) {
			throw new NoTagFoundError();
		}

		this.tags.delete(id);

		await this.save();

		return toBeDeletedTag;
	}

	public async updateTag(
		this: UserDoc,
		newTagData: DBTag
	): Promise<DBTag> {
		const id = stringifyId(newTagData._id);

		const toBeUpdatedTag = this.tags.get(id);
		if (!toBeUpdatedTag) {
			throw new NoTagFoundError();
		}

		replaceO1(toBeUpdatedTag, newTagData, "_id");

		await this.save();

		return toBeUpdatedTag;
	}

	public async addTodo(
		this: UserDoc,
		todo: Omit<DBTodo, "_id">
	): Promise<DBTodo> {
		const newTodo: DBTodo = {
			...todo,
			_id : new Types.ObjectId()
		};

		this.todos.set(newTodo._id.toString(), newTodo);

		await this.save();

		return newTodo;
	}

	public async deleteTodo(
		this: UserDoc,
		todoId: DBTodo["_id"]
	): Promise<DBTodo> {
		const id = stringifyId(todoId);

		const toBeDeletedTodo = this.todos.get(id);
		if (!toBeDeletedTodo) {
			throw new NoTodoFoundError();
		}

		this.todos.delete(id);

		await this.save();

		return toBeDeletedTodo;
	}

	public async updateTodo(
		this: UserDoc,
		newTodoData: DBTodo
	): Promise<DBTodo> {
		const id = stringifyId(newTodoData._id);

		const toBeUpdatedTodo = this.todos.get(id);
		if (!toBeUpdatedTodo) {
			throw new NoTodoFoundError();
		}

		replaceO1(toBeUpdatedTodo, newTodoData, "_id");

		await this.save();

		return toBeUpdatedTodo;
	}
}

UserSchema.loadClass(UserSchemaMethods);

const User = mongoose.models.User || model<DBUser, UserModel>("User", UserSchema);

export default User;
