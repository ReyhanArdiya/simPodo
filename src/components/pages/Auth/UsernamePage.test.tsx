import { render } from "@testing-library/react";
import "../../../tests/mock-matchMedia";
import MockStore from "../../../tests/mock-store";
import MockTheme from "../../../tests/MockTheme";
import UsernamePage from "./UsernamePage";

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
				<UsernamePage onSubmit={mockSubmitHandler}/>
			</MockTheme>
		</MockStore>
	);
});

describe("UsernamePage component", () => {
	it("is rendered", () => {
		expect(document.getElementById("username")).toBeInTheDocument();
	});


});
