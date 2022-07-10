import { fireEvent, render, screen } from "@testing-library/react";
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

	it("submits when email and password is valid", () => {
		const emailInput = document.querySelector(
			"input[type=\"email\"]"
		) as HTMLInputElement;
		const passwordInput = document.querySelector(
			"input[type=\"password\"]"
		) as HTMLInputElement;
		const submitButton = screen.getByText(/login/i);

		emailInput.value = "thisisacorrectemail@gmail.com";
		passwordInput.value = "th1sISavalidPassword";

		fireEvent.click(submitButton);
		expect(mockSubmitHandler).toBeCalled();
	});

	it("doesn't submit when email and password is invalid", () => {
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
