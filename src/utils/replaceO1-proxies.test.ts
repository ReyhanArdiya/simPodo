import replaceO1Proxies from "./replaceO1-proxies";

describe("replaceO1Proxies", () => {
	let o1 = new Proxy(
		{
			name : "alice",
			age  : 20,
			_id  : "aliceid1"
		},
		{}
	);

	let o2 = {
		name : "bob",
		age  : 23,
		_id  : "aliceid2",
		not  : false
	};

	beforeEach(() => {
		o1 = new Proxy(
			{
				name : "alice",
				age  : 20,
				_id  : "aliceid1"
			},
			{
			}
		);

		o2 = {
			name : "bob",
			age  : 23,
			_id  : "aliceid2",
			not  : false
		};
	});

	it("replace o1 IN-PLACE from same props of o2", () => {
		replaceO1Proxies(o1, o2);

		// @ts-expect-error: not is supposed to be undefined (or false in the case of proxies)
		expect(o1?.not).toBe(false);
		expect(o1._id).toBe(o2._id);
		expect(o1.name).toBe(o2.name);
		expect(o1.age).toBe(o2.age);
	});

	it("replace o1 IN-PLACE EXCEPT for a specified prop", () => {
		replaceO1Proxies(o1, o2, "_id");

		expect(o1._id).not.toBe(o2._id);
	});
});
