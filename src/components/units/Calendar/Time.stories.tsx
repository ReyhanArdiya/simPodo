import type { HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import dayjs from "dayjs";
import TimeComp from "./Time";

const today = dayjs();

interface Args {
	dark?: boolean;
	month: string;
	year: number;
	onPrevClick: HandlerFunction;
	onNextClick: HandlerFunction;
}

const meta: Meta<Args> = {
	component : TimeComp,
	args      : {
		dark  : false,
		month : today.format("MMM"),
		year  : today.year(),
	},
	argTypes : {
		onPrevClick : { action : "prev" },
		onNextClick : { action : "next" },
	}
};

const Template: StoryFn<Args> = args => <TimeComp {...args} />;

export const Time = Template.bind({});

export default meta;
