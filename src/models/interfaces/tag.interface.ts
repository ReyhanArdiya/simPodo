export default class Tag {
	constructor(
		public color: string,
		public readonly _id: string,
		public name: string,
	) {
		this.color = color;
		this._id = _id;
		this.name = name;
	}
}