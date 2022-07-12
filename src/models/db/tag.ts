import { Schema, Types } from "mongoose";
import Tag from "../base/tag";

export class DBTag extends Tag {
	constructor(
		name: Tag["name"],
		color: Tag["color"],
		public _id: Types.ObjectId = new Types.ObjectId()
	) {
		super(name, color);
	}
}

const TagSchema = new Schema<DBTag>({
	color : {
		type     : String,
		required : true
	},
	name : {
		type     : String,
		required : true
	},
}, { strict : "throw" });

export default TagSchema;
