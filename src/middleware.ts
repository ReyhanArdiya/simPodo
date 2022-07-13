import { NextMiddleware, NextResponse } from "next/server";
import allowAPITesting from "./utils/tests/allow-API-testing";

export const middleware: NextMiddleware = () => {
	const response = NextResponse.next();
	allowAPITesting(response);

	return response;
};
