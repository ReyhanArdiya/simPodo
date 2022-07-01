import { HydratedDocument, Model, model, Schema, Types } from "mongoose";
import replaceO1 from "../../utils/replaceO1";
import NoTagFoundError from "../errors/no-tag-found-error";
import NoTodoFoundError from "../errors/no-todo-found-error";
import type Tag from "../tag";
import type Todo from "../todo";
import type CUser from "../user";
import TagSchema, { ITag } from "./tag";
import TodoSchema, { ITodo } from "./todo";

export interface IUser extends Pick<CUser, "email" | "username"> {
	readonly _id: Types.ObjectId;
	tags: Types.Map<ITag>;
	todos: Types.Map<ITodo>;
}

export interface UserInstanceMethods {
	addTag(tag: Omit<Tag | ITag, "_id">): Promise<ITag>;
	deleteTag(tagId: Tag["_id"] | ITag["_id"]): Promise<ITag>;
	updateTag(newTagData: Tag | ITag): Promise<ITag>;

	addTodo(todo: Omit<Todo | ITodo, "_id">): Promise<ITodo>;
	deleteTodo(todoId: Todo["_id"] | ITodo["_id"]): Promise<ITodo>;
	updateTodo(newTodoData: Todo | ITodo): Promise<ITodo>;
}

type UserModel = Model<IUser, Record<string, never>, UserInstanceMethods>;

export type UserDoc = HydratedDocument<IUser, UserInstanceMethods>;

const UserSchema = new Schema<IUser, UserModel, UserInstanceMethods>(
	{
		username : {
			type     : String,
			required : true
		},
		email : {
			type     : String,
			required : true
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
		}
	},
	{ strict : "throw" }
);

const stringifyId = (id: string | Types.ObjectId) => typeof id === "string" ? id : id.toString();

class UserSchemaMethods implements UserInstanceMethods {
	public async addTag(
		this: UserDoc,
		tag: Omit<ITag | Tag, "_id">
	): Promise<ITag> {
		const newTag: ITag = {
			...tag,
			_id : new Types.ObjectId()
		};

		this.tags.set(newTag._id.toString(), newTag);

		await this.save();

		return newTag;
	}

	public async deleteTag(
		this: UserDoc,
		tagId: string | Types.ObjectId
	): Promise<ITag> {
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
		newTagData: ITag | Tag
	): Promise<ITag> {
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
		todo: Omit<ITodo | Todo, "_id">
	): Promise<ITodo> {
		const newTodo: ITodo = {
			...todo,
			_id : new Types.ObjectId()
		};

		this.todos.set(newTodo._id.toString(), newTodo);

		await this.save();

		return newTodo;
	}

	public async deleteTodo(
		this: UserDoc,
		todoId: string | Types.ObjectId
	): Promise<ITodo> {
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
		newTodoData: ITodo | Todo
	): Promise<ITodo> {
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

const User = model<IUser, UserModel>("User", UserSchema);

export default User;
