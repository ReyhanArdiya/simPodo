const replaceO1 = <T1 extends object, T2 extends object>(
	o1: T1,
	o2: T2,
	exc?: keyof T1 & keyof T2
) => {
	for (const [ o2Key, o2Val ] of Object.entries(o2)) {
		if (o2Key !== exc && o2Key in o1) {
			const o1Val = o1[o2Key as keyof T1];

			if (typeof o1Val === "object") {
				replaceO1(o1Val as never, o2Val, exc);
			} else {
				o1[o2Key as keyof T1] = o2Val;
			}
		}
	}

	return o1;
};

export default replaceO1;
