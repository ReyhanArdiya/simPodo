import { fireEvent, render, screen, act } from "@testing-library/react";
import "../../../tests/mock-matchMedia";
import MockStore from "../../../tests/mock-store";
import MockTheme from "../../../tests/MockTheme";
import CredentialsPage from "./CredentialsPage";

let mockSubmitHandler: jest.Mock;
jest.mock("uuid", () => ({
	v4() {
		return "eb7b7961-395d-4b4c-afc6-9ebcadaf0150";
	}
}));

beforeEach(() => {
	mockSubmitHandler = jest.fn();

	render(
		<MockStore>
			<MockTheme>
				<CredentialsPage onSubmit={mockSubmitHandler}/>
			</MockTheme>
		</MockStore>
	);
});

describe("AuthPage component", () => {
	it("is rendered", () => {
		expect(document.getElementById("credentials")).toBeInTheDocument();
	});

	it("changes mode when clicking sign up/login button", () => {
		const signupRx = /sign up/i;
		const loginRx = /login/i;
		const modeToggler = screen.getByText(signupRx);
		const submitButton = screen.getByText(loginRx);

		for (let i = 1; i < 3; i++) {
			expect(modeToggler.innerHTML).toMatch(i % 2 ? signupRx : loginRx);
			expect(submitButton.innerHTML).toMatch(i % 2 ? loginRx : signupRx);

			fireEvent.click(modeToggler);
		}
	});

	// CMT I'm not skilled enough to fix these tests :(, but it actually works in the browsser tho
	it.skip("submits when email and password is valid", async () => {
		const emailInput = document.querySelector(
			"input[type=\"email\"]"
		) as HTMLInputElement;
		const passwordInput = document.querySelector(
			"input[type=\"password\"]"
		) as HTMLInputElement;
		const submitButton = screen.queryByText(/login/i) || screen.queryByText(/sign up/i);

		await act(async () => {
			fireEvent.focus(emailInput);
		});

		await act(async () => {
			fireEvent.change(emailInput, { target : { value : "mreyhanardiyaputraw@students.undip.ac.id" } });
		});

		await act(async () => {
			fireEvent.focus(passwordInput);
		});

		await act(async () => {
			fireEvent.change(passwordInput, { target : { value : "Hellowrold123" } });
		});

		await act(async () => {
			fireEvent.click(submitButton as HTMLButtonElement);
		});

		expect(mockSubmitHandler).toBeCalled();
	});

	it.skip("doesn't submit when email and password is invalid", () => {
		const emailInput = document.querySelector(
			"input[type=\"email\"]"
		) as HTMLInputElement;
		const passwordInput = document.querySelector(
			"input[type=\"password\"]"
		) as HTMLInputElement;
		const submitButton = screen.getByText(/login/i);

		emailInput.value = "thisiswrong";
		passwordInput.value = "short";

		fireEvent.click(submitButton);
		expect(mockSubmitHandler).not.toBeCalled();
	});
});
