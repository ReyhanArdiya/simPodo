import ClientUser from "../../models/client/user";
import mockRootState from "../../tests/mock-rootstate";
import { authSliceSelectors } from "./slice";

const initialState = mockRootState;
initialState.auth = {
	user : new ClientUser("username", {
		firebase : {
			local : {
				operationType : "signIn",
				providerId    : "2",
				// @ts-expect-error: ain't nobody got time for dat
				user          : {
					uid : "uid"
				}
			}
		}
	})
};

describe("authSlice selectors", () => {
	it("selects the current user", () => {
		expect(authSliceSelectors.selectCurrentUser(initialState)).toEqual(
			initialState.auth.user
		);
	});
	it("selects the currrent user's local firebase credentials", () => {
		expect(
			authSliceSelectors.selectLocalFirebaseCredentials(initialState)
		).toEqual(initialState.auth.user?.authProviders.firebase.local);
	});
});
