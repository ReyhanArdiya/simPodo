import type { HandlerFunction } from "@storybook/addon-actions";
import type { ArgType } from "@storybook/api";
import type { Meta, StoryFn } from "@storybook/react";
import DateCard, { DateCardProps } from "./DateCard";
import DateCards from "./DateCards";

interface Args {
	dark?: boolean;
	onClick: HandlerFunction;
}

const meta: Meta<Args> = {
	args     : { dark : false },
	argTypes : { onClick : { action : "clicked!" } }
};

export const Single: StoryFn<
	Args & DateCardProps & { day: ArgType; date: ArgType }
> = DateCard;
Single.argTypes = {
	day : {
		type    : "string",
		control : {
			type    : "select",
			options : [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			]
		},
		defaultValue : "Monday"
	},
	date : {
		type    : "number",
		control : {
			type : "range",
			min  : 1,
			max  : 31,
			step : 1
		},
		defaultValue : 1
	}
};

export const List = ({ quant = 31, ...args }) => {
	const dates: DateCardProps[] = [];
	for (let i = 1; i <= quant; i++) {
		dates.push({
			active : i === 1,
			day    : "monday",
			date   : i,
			onClick(day, date) {
				args.onClick(day, date);
			},
			dark : args.dark
		});
	}

	return <DateCards
		{...args}
		dates={dates}
	/>;
};

export default meta;
