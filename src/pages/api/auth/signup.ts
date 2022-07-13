import { setCookie } from "cookies-next";
import dayjs from "dayjs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import type { NextApiHandler } from "next";
import User, { DBUser } from "../../../models/db/user";
import { CookieConfigs, CookieKeys } from "../../../utils/auth/cookies";
import setupFirebaseClientApp from "../../../utils/auth/firebase/client/setup-firebase-client-app";
import setupFirebaseClientAuth from "../../../utils/auth/firebase/client/setup-firebase-client-auth";
import validateEmail from "../../../utils/auth/validate-email";
import validatePass from "../../../utils/auth/validate-pass";
import connectMongoose from "../../../utils/connect-mongoose";

export interface SignupSuccessRes {
	user: DBUser;
}

export type SignupErrorRes = Pick<Error, "name" | "message">;

const validateInput = (email: string, password: string) => validateEmail(email) && validatePass(password);

const authApi: NextApiHandler = async (req, res) => {
	try {
		await connectMongoose();
		const { email, password } = req.body;

		// CMT this throws an error btw
		if (req.method === "POST" && validateInput(email, password)) {
			const auth = setupFirebaseClientAuth(setupFirebaseClientApp());
			const credentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const today = dayjs();
			const options: CookieConfigs = {
				maxAge  : 604800,
				expires : dayjs()
					.date(today.date() + 7)
					.toDate(),
				secure   : true,
				httpOnly : true,
				sameSite : true
			};

			setCookie(
				CookieKeys.TOKEN,
				await credentials.user.getIdToken(),
				{
					...options,
					req,
					res
				}
			);

			const user = new User<Partial<DBUser>>({
				authProviders : {
					firebase : {
						local : {
							user : {
								uid : credentials.user.uid
							}
						}
					}
				}
			});


			const successRes: SignupSuccessRes = {
				user : await user.save(),
			};

			res.status(201).json(successRes);
		}
	} catch (err) {
		if (
			err instanceof Error
		) {
			const { message, name } = err;

			res.status(400).json({
				name,
				message
			} as SignupErrorRes);
		}
	}
};

export default authApi;
