import authSlice, { authSliceActions } from "./slice";

const { reducer } = authSlice;
let initialState;
let user;

describe("authSlice actions", () => {
	beforeEach(() => {
		initialState = authSlice.getInitialState();
		user = {
			localid  : "1",
			token    : "1234",
			username : "test"
		};
	});

	test("if login adds auth properties to state", () => {
		const newState = reducer(
			initialState,
			authSliceActions.login({ user })
		);

		expect(newState).toHaveProperty("user");
		expect(newState.user).toHaveProperty("localid", "1");
		expect(newState.user).toHaveProperty("token", "1234");
		expect(newState.user).toHaveProperty("username", "test");
	});

	test("if logout removes user's state", () => {
		const newState = reducer(initialState, authSliceActions.logout());

		expect(newState).not.toHaveProperty("user");
		expect(newState).not.toHaveProperty("user.localid");
		expect(newState).not.toHaveProperty("user.token");
		expect(newState).not.toHaveProperty("user.username");
	});

	it("refreshes user's token using refreshToken", () => {
		const oldUserToken = user.token;
		const newState = reducer(
			initialState,
			authSliceActions.refreshToken("newToken")
		);

		expect(newState.user.token).not.toEqual(oldUserToken);
	});

	it("changes username using changeUsername", () => {
		const oldUsername = user.username;
		const newState = reducer(
			initialState,
			authSliceActions.changeUsername("newUsername")
		);

		expect(newState.user.username).not.toEqual(oldUsername);
	});
});