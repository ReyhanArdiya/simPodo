import replaceO1 from "./replaceO1";

describe("replaceO1", () => {
	let o1 = {
		name : "alice",
		age  : 20,
		_id  : "aliceid1"
	};

	let o2 = {
		name : "bob",
		age  : 23,
		_id  : "aliceid2",
		not  : false
	};

	beforeEach(() => {
		o1 = {
			name : "alice",
			age  : 20,
			_id  : "aliceid1"
		};

		o2 = {
			name : "bob",
			age  : 23,
			_id  : "aliceid2",
			not  : false
		};
	});

	it("replace o1 IN-PLACE from same props of o2", () => {
		replaceO1(o1, o2);

		expect(o1).not.toHaveProperty("not");
		expect(o1._id).toBe(o2._id);
		expect(o1.name).toBe(o2.name);
		expect(o1.age).toBe(o2.age);
	});

	it("replace o1 IN-PLACE EXCEPT for a specified prop", () => {
		replaceO1(o1, o2, "_id");

		expect(o1._id).not.toBe(o2._id);
	});

	it("handles nested objects", () => {
		const shopDayQty1 = {
			person : "me",
			fruits : {
				apple  : 5,
				banana : 2,
				fruits : 7
			},
			meat : {
				chicken : 2,
				beef    : 1,
				meat    : 3
			},
			date : new Date()
		};

		const shopDayQty2 = {
			person : "him",
			fruits : {
				apple  : 2,
				banana : 3,
				fruits : 5
			},
			meat : {
				chicken : 6,
				beef    : 9,
				meat    : 15
			},
			date : new Date()
		};

		replaceO1(shopDayQty1, shopDayQty2);

		expect(shopDayQty1).toEqual(shopDayQty2);
	});
});
