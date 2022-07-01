export default class Tag {
	constructor(
		public name: string,
		public color: string,
		public readonly _id: string = "",
	) {
		this.color = color;
		this.name = name;
		this._id = _id;
	}
}
