import axios from "axios";
import type { SignupSuccessRes } from "../../../pages/api/auth/signup";
import firebaseTestUtils from "../../../utils/tests/firebase-test-utils";
import { APIConfigs } from "./api-configs";

const { TESTING_HOST } = APIConfigs;

afterAll(async () => {
	await firebaseTestUtils.auth.clearUsers();
});

describe("Signup API Route", () => {
	it("creates an account on valid data", async () => {
		const res = await axios.post<SignupSuccessRes>(
			`${TESTING_HOST}/api/auth/signup`,
			{
				email    : "thisisavalidemail@gmail.com",
				password : "TH1sisAVALIDpassworddddd"
			}
		);

		expect(res.status).toBe(201);
		expect(
			res.data.user.authProviders.firebase.local.user.uid
		).toBeDefined();
	}, 100_000_000);

	it("rejects when submitting invalid email", async () => {
		await expect(axios.post<SignupSuccessRes>(
			`${TESTING_HOST}/api/auth/signup`,
			{
				email    : "thisisavalidemail@gmail",
				password : "TH1sisAVALIDpassworddddd"
			}
		)).rejects.toBeTruthy();

	}, 100_100_100);

	it("rejects when submitting invalid password", async () => {
		await expect(axios.post<SignupSuccessRes>(
			`${TESTING_HOST}/api/auth/signup`,
			{
				email    : "thisisavalidemail@gmail.com",
				password : "d"
			}
		)).rejects.toBeTruthy();

	}, 100_100_100);
});
