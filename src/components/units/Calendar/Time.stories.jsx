import dayjs from "dayjs";
import TimeComp from "./Time";

const today = dayjs();

/** @type {import("@storybook/react").Meta} */
const Meta = {
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

const Template = args => <TimeComp {...args} />;

export const Time = Template.bind({});

export default Meta;