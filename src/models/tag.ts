import { v4 as uuidv4 } from "uuid";
import type { Tag as ITag } from "./interfaces/tag.interface";

export default class Tag implements ITag {
	constructor(
		public color: Tag["color"],
		public name: Tag["name"],
		public _id : Tag["_id"] = uuidv4()
	) {
		this.color = color;
		this.name = name;
		this._id = _id;
	}
}
