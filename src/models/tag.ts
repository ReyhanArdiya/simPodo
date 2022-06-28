import { Schema, Types } from "mongoose";
import type { Tag as IsomorphicTag } from "./interfaces/tag.interface";

export interface ITag extends Omit<IsomorphicTag, "_id"> {
	readonly _id: Types.ObjectId;
}

const TagSchema = new Schema<ITag>({
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
