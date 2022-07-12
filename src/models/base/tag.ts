import type { DualId } from "./base.interfaces";

export default abstract class Tag {
	public abstract readonly _id: DualId;

	constructor(
		public name: string,
		public color: string,
	) {}
}
