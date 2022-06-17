import BigCalendar from "./BigCalendar";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : BigCalendar,
	argTypes  : {
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
};

const Template = args => {
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

export const Light = Template.bind({});
Light.args = { dark : false };

export const Dark = Template.bind({});
Dark.args = { dark : true };


export default Meta;