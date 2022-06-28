import { Error, HydratedDocument, Model, model, Schema, Types } from "mongoose";
import replaceO1 from "../../utils/replaceO1";
import NoTagFoundError from "../errors/no-tag-found-error";
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
	updateTodo(newTodo: Todo | ITodo): Promise<ITodo>;
}

export interface UserVirtuals {}

export interface UserStaticMethods {}

type UserModel = Model<
	IUser,
	Record<string, never>,
	UserInstanceMethods,
	UserVirtuals
> &
	UserStaticMethods;

export type UserDoc = HydratedDocument<
	IUser,
	UserInstanceMethods,
	UserVirtuals
>;

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

class UserSchemaMethods
implements UserInstanceMethods, UserVirtuals, Partial<UserStaticMethods> {
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
		// TODO since map => hash table in mongo i think i could use $unset
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

	public async addTodo(todo: Omit<ITodo | Todo, "_id">): Promise<ITodo> {
		throw new Error("Method not implemented.");
	}

	public async deleteTodo(todoId: string | Types.ObjectId): Promise<ITodo> {
		throw new Error("Method not implemented.");
	}

	public async updateTodo(newTodo: ITodo | Todo): Promise<ITodo> {
		throw new Error("Method not implemented.");
	}
}

UserSchema.loadClass(UserSchemaMethods);

const User = model<IUser, UserModel>("User", UserSchema);

export default User;
