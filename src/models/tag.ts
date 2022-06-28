import { v4 as uuidv4 } from "uuid";

export interface ITag {
	color: string;
	_id: string;
	name: string;
}

export default class Tag implements ITag {
	constructor(
		public color: ITag["color"],
		public name: ITag["name"],
		public _id : ITag["_id"] = uuidv4()
	) {
		this.color = color;
		this.name = name;
		this._id = _id;
	}
}
