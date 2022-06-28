import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";
import User from "../../models/user";
import authSlice, { AuthSliceState } from "./slice";

const { actions, reducer } = authSlice;

let loggedInState: AuthSliceState;
let mockUser: User;
beforeEach(() => {
	mockUser = new User(
		"username",
		"email",
		"token",
		new Map(),
		new Map(),
		"_id"
	);

	loggedInState = {
		user : new User(
			"username",
			"email",
			"token",
			new Map(),
			new Map(),
			"_id"
		)
	};
});

describe("authSlice reducers for user's login state", () => {
	it("logs the user in WHEN the user is not logged in", () => {
		const newState = reducer({ user : undefined }, actions.login(mockUser));

		expect(newState.user).toBeInstanceOf(User);
	});
	it("throws an error when logging in a logged in user", () => {
		expect(() => reducer(loggedInState, actions.login(mockUser))).toThrow(
			UserAlreadyLoggedInError
		);
	});

	it("throws an error when logging out a not logged in user", () => {
		expect(() => reducer({ user : undefined }, actions.logout())).toThrow(
			UserNotLoggedInError
		);
	});
	it("logs the user out WHEN the user is logged in", () => {
		const newState = reducer(loggedInState, actions.logout());

		expect(newState.user).toBeUndefined();
	});

	it(
		"throws an error when refreshing a not logged in user's token",
		() => {
			const errFn = () => reducer(
				{ user : undefined },
				actions.refreshToken("newToken")
			);

			expect(errFn).toThrow(UserNotLoggedInError);
		}
	);
	it("refreshes the token WHEN the user is logged in", () => {
		const newToken = "newToken";

		const { user } = reducer(loggedInState, actions.refreshToken(newToken));

		expect(user?.token).toBe(newToken);
	});
});
