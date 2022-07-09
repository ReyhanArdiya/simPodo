import User from "../../models/user";
import mockRootState from "../../tests/mock-rootstate";
import { authSliceSelectors } from "./slice";


const initialState = mockRootState;
initialState.auth = {
	user : new User(
		"username",
		"email",
		"token",
		new Map(),
		new Map(),
		"_id"
	),
};

describe("authSlice selectors", () => {
	it("selects the current user", () => {
		expect(authSliceSelectors.selectCurrentUser(initialState)).toEqual(
			initialState.auth.user
		);
	});
});
