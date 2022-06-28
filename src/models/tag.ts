export default class Tag {
	constructor(
		public color: string,
		public name: string,
		public readonly _id: string = "",
	) {
		this.name = name;
		this.color = color;
		this._id = _id;
	}
}
