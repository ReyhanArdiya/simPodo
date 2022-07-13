import type { NextResponse } from "next/server";

const allowAPITesting = (res: NextResponse) => {
	if (process.env.NODE_ENV !== "test") {
		res.headers.set("Access-Control-Allow-Origin", "*");
	}
};

export default allowAPITesting;
