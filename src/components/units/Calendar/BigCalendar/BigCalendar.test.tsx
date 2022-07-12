import { render, screen } from "@testing-library/react";
import MockTheme from "../../../../tests/MockTheme";
import BigCalendar from "./BigCalendar";

interface Date {
	active : boolean;
	dark : boolean;
	date : number;
	onClick : jest.Mock;
	outside : boolean;
}

const getDateElements = (dates: Date[]) => {
	return dates.map(({ date }) => {
		const newDate = date < 10 ? `0${date}` : date;
		return screen.getByText(newDate);
	});
};

describe("BigCalendar", () => {
	const numOfDates = 42;
	const dates: Date[] = [];
	const mockClick = jest.fn();
	for (let i = 0; i < numOfDates; i++) {
		dates.push({
			active  : false,
			dark    : false,
			date    : i,
			onClick : mockClick,
			outside : false
		});
	}

	beforeEach(() => {
		render(
			<MockTheme>
				<BigCalendar
					activeDayI={0}
					dates={dates}
				/>
			</MockTheme>
		);
	});

	it("renders all dates", () => {
		const datesElement = getDateElements(dates);

		expect(datesElement).toHaveLength(numOfDates);
	});

	test("each dateElement is clickable", () => {
		const datesElement = getDateElements(dates);

		datesElement.forEach(dateElement => {
			dateElement.click();
		});

		expect(mockClick).toHaveBeenCalledTimes(numOfDates);
	});
});
