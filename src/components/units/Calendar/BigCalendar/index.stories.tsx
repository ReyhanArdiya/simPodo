import type { HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import BigCalendar from "./BigCalendar";

interface Args {
	activeDate: number;
	activeDayI: number;
	onClick: HandlerFunction;
	dark: boolean;
}

const meta: Meta<Args> = {
	component : BigCalendar,
	args      : {
		dark : false,
	},
	argTypes : {
		activeDate : {
			type    : "number",
			control : {
				type : "range",
				min  : 1,
				max  : 42,
			},
			defaultValue : 1
		},
		activeDayI : {
			type    : "number",
			control : {
				type : "range",
				min  : 0,
				max  : 6,
			},
			defaultValue : 0
		},
		onClick : { action : "dayDate" }
	},
	parameters : { jest : [ "BigCalendar" ] }
};

const Template: StoryFn<Args> = args => {
	const dates = Array(42).fill(1).map((_, i) => ({
		active  : args.activeDate === i + 1,
		dark    : false,
		date    : i + 1,
		onClick : args.onClick,
		outside : false
	}));

	return <BigCalendar
		{...args}
		dates={dates}
	       />;
};

export const Default: StoryFn<Args> = Template.bind({});

export const Light: StoryFn<Args> = Template.bind({});
Light.args = { dark : false };

export const Dark: StoryFn<Args> = Template.bind({});
Dark.args = { dark : true };


export default meta;