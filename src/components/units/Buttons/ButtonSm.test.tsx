import { fireEvent, render, screen } from "@testing-library/react";
import MockTheme from "../../../tests/MockTheme";
import ButtonSm from "./ButtonSm";

describe("ButtonSm", () => {
	it("is clickable", () => {
		const mockFn = jest.fn();

		render(
			<MockTheme>
				<ButtonSm onClick={mockFn} />
			</MockTheme>
		);

		fireEvent.click(screen.getByRole("button"));

		expect(mockFn).toHaveBeenCalled();
	});
	it("can have different text", () => {
		render(
			<MockTheme>
				<ButtonSm>Hello</ButtonSm>
			</MockTheme>
		);
		expect(screen.getByRole("button")).toHaveTextContent("Hello");
	});
});
