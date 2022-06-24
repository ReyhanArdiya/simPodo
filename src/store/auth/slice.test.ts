import type { IUser } from "../../models/user";
import authSlice, { authSliceActions } from "./slice";

const { reducer } = authSlice;
let initialState: ReturnType<typeof authSlice.getInitialState>;
let user : IUser;

describe("authSlice actions", () => {
	beforeEach(() => {
		initialState = authSlice.getInitialState();
		user = {
			localId  : "1",
			token    : "1234",
			username : "test",
			email    : "randomemail@gmail.com"
		};
	});

	test("if login adds auth properties to state", () => {
		const newState = reducer(
			initialState,
			authSliceActions.login({ user })
		);

		expect(newState).toHaveProperty("user");
		expect(newState.user).toHaveProperty("localId", "1");
		expect(newState.user).toHaveProperty("token", "1234");
		expect(newState.user).toHaveProperty("username", "test");
	});

	test("if logout removes user's state", () => {
		const newState = reducer(initialState, authSliceActions.logout());

		expect(newState).not.toHaveProperty("user");
		expect(newState).not.toHaveProperty("user.localId");
		expect(newState).not.toHaveProperty("user.token");
		expect(newState).not.toHaveProperty("user.username");
	});

	it("refreshes user's token using refreshToken", () => {
		const oldUserToken = user.token;
		const newState = reducer(
			initialState,
			authSliceActions.refreshToken("newToken")
		);

		expect(newState.user?.token).not.toEqual(oldUserToken);
	});

	it("changes username using changeUsername", () => {
		const oldUsername = user.username;
		const newState = reducer(
			initialState,
			authSliceActions.changeUsername("newUsername")
		);

		expect(newState.user?.username).not.toEqual(oldUsername);
	});
});

describe("authSlice actions after logout", () => {
	beforeEach(() => {
		initialState = authSlice.getInitialState();
		user = {
			localId  : "1",
			token    : "1234",
			username : "test",
			email    : "randomemail@gmail.com"
		};
		initialState = reducer(initialState, authSliceActions.logout());
	});

	it("can login again", () => {
		const newState = reducer(
			initialState,
			authSliceActions.login({ user })
		);

		expect(newState).toHaveProperty("user");
		expect(newState.user).toHaveProperty("localId");
		expect(newState.user).toHaveProperty("token");
		expect(newState.user).toHaveProperty("username");
	});

	it("throws an error when refreshing token BEFORE login", () => {
		expect(
			reducer.bind(
				null,
				initialState,
				authSliceActions.refreshToken("djoeifjwefoi")
			)
		).toThrow(new Error("User is not logged in"));
	});

	it("throws an error when changing username BEFORE login", () => {
		expect(
			reducer.bind(
				null,
				initialState,
				authSliceActions.changeUsername("djoeifjwefoi")
			)
		).toThrow(new Error("User is not logged in"));
	});
});
