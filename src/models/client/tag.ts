import Tag from "../base/tag";

export default class ClientTag extends Tag {
	constructor(
		name: Tag["name"],
		color: Tag["color"],
		public _id = ""
	) {
		super(name, color);
	}
}
