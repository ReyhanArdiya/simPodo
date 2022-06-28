export interface IReplaceO1 {
	<T1 extends object, T2 extends object>(
		o1: T1,
		o2: T2,
		exc?: keyof T1 & keyof T2
	): T1;
}

const replaceO1: IReplaceO1 = <T1 extends object, T2 extends object>(
	o1: T1,
	o2: T2,
	exc?: keyof T1 & keyof T2
) => {
	for (const [ key, val ] of Object.entries(o2)) {
		if (key !== exc && key in o1) {
			if (typeof o1[key as keyof T1] === "object") {
				return replaceO1(o1, o2, exc);
			} else {
				o1[key as keyof T1] = val;
			}
		}
	}

	return o1;
};

export default replaceO1;
