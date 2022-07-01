const replaceO1Proxies = <T1 extends object, T2 extends object>(
	o1: T1,
	o2: T2,
	exc?: keyof T1 & keyof T2
) => {
	let key: keyof T2;

	for (key in o2) {
		if (key !== exc) {
			type K = Omit<T1, keyof T1 & keyof T2>;

			/*
                REFAC The problem here is o1 & o2 values types aren't always the same
                and TS worries what happens if we, for example, set a string to a boolean
                and vice versa. How to tell TS that will never happen?
            */
			// @ts-expect-error : see above REFAC
			o1[key as keyof K] = o2[key as keyof K]!;
		}
	}

	return o1;
};

export default replaceO1Proxies;
