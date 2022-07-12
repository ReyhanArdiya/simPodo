import ClientUser from "../../models/client/user";
import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";

import authSlice, { AuthSliceState } from "./slice";

const { actions, reducer } = authSlice;
let loggedInState: AuthSliceState;
let mockUser: ClientUser;
beforeEach(() => {
	mockUser = new ClientUser(
		"username",
		{
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
		}
	);

	loggedInState = {
		user : new ClientUser(
			"username",
			{
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
			}
		)
	};
});

describe("authSlice actions for user's login state", () => {
	it("logs the user in WHEN the user is not logged in", () => {
		const newState = reducer(
			{ user : undefined },
			actions.userLoggedIn(mockUser)
		);

		expect(newState.user).toBeInstanceOf(ClientUser);
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
});

describe("authSlice actions for user's data", () => {
	it("throws an error when updating a not logged in user", () => {
		const errorFn = () => reducer(
			{ user : undefined },
			actions.userDataUpdated({} as ClientUser)
		);

		expect(errorFn).toThrow(UserNotLoggedInError);
	});

	it("updates the user data selectively", () => {
		const user = new ClientUser(
			"username",
			{
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
			}
		);

		const loggedInState = reducer(
			{ user : undefined },
			actions.userLoggedIn(user)
		);

		const newUserData: ClientUser = {
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


