import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";
import User from "../../models/user";
import authSlice, { authSliceSelectors, AuthSliceState } from "./slice";

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

describe("authSlice actions for user's login state", () => {
	it("logs the user in WHEN the user is not logged in", () => {
		const newState = reducer(
			{ user : undefined },
			actions.userLoggedIn(mockUser)
		);

		expect(newState.user).toBeInstanceOf(User);
	});
	it("throws an error when logging in a logged in user", () => {
		expect(() => reducer(
			loggedInState,
			actions.userLoggedIn(mockUser)
		)).toThrow(UserAlreadyLoggedInError);
	});

	it("throws an error when logging out a not logged in user", () => {
		expect(() => reducer(
			{ user : undefined },
			actions.userLoggedOut()
		)).toThrow(UserNotLoggedInError);
	});
	it("logs the user out WHEN the user is logged in", () => {
		const newState = reducer(loggedInState, actions.userLoggedOut());

		expect(newState.user).toBeUndefined();
	});

	it("throws an error when refreshing a not logged in user's token", () => {
		const errFn = () => reducer({ user : undefined }, actions.tokenRefreshed("newToken"));

		expect(errFn).toThrow(UserNotLoggedInError);
	});
	it("refreshes the token WHEN the user is logged in", () => {
		const newToken = "newToken";

		const { user } = reducer(
			loggedInState,
			actions.tokenRefreshed(newToken)
		);

		expect(user?.token).toBe(newToken);
	});
});

describe("authSlice actions for user's data", () => {
	it("throws an error when updating a not logged in user", () => {
		const errorFn = () => reducer(
			{ user : undefined },
			actions.userDataUpdated({} as User)
		);

		expect(errorFn).toThrow(UserNotLoggedInError);
	});

	it("updates the user data selectively", () => {
		const user = new User(
			"username",
			"email",
			"token",
			new Map(),
			new Map(),
			"_id"
		);

		const loggedInState = reducer(
			{ user : undefined },
			actions.userLoggedIn(user)
		);

		const newUserData: User = {
			...user,
			username : "updatedUsername"
		};

		const updatedState = reducer(
			loggedInState,
			actions.userDataUpdated(newUserData)
		);

		const { user: updatedUser } = updatedState;

		expect(updatedUser?.username).toEqual(newUserData.username);

		for (const key in Object.keys(updatedUser!).filter(
			k => k !== "username"
		)) {
			expect(updatedUser![key as keyof typeof updatedUser]).toBe(
				user[key as keyof typeof user]
			);
		}
	});
});


describe("authSlice selectors", () => {
	it("selects the current user", () => {
		expect(authSliceSelectors.selectCurrentUser(loggedInState)).toEqual(
			loggedInState.user
		);
	});
});
