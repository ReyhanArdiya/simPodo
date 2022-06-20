import { fireEvent, render, screen } from "@testing-library/react";
import MockTheme from "../../../tests/MockTheme";
import ButtonLg from "./ButtonLg";

describe("Buttonlg", () => {
	it("is clickable", () => {
		const mockFn = jest.fn();

		render(
			<MockTheme>
				<ButtonLg onClick={mockFn} />
			</MockTheme>
		);

		fireEvent.click(screen.getByRole("button"));

		expect(mockFn).toHaveBeenCalled();
	});
});
