import type { NextRequest } from "next/server";

export enum CookieKeys {
    TOKEN = "token"
}

export interface CookieConfigs {
	secure: true;
	httpOnly: true;
	sameSite: true;

    /** Next week from now in seconds */
	maxAge: 604800;
	expires: Date;
}

export const getMiddlewareCookies = (req: NextRequest) => req.cookies;
