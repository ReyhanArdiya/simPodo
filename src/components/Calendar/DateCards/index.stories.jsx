import DateCard from "./DateCard";
import DateCards from "./DateCards";

/** @type {import("@storybook/react").Meta} */
const Meta = { args : { dark : false }, };


export const Single = DateCard;
Single.argTypes = {
	day : {
		type    : "string",
		control : {
			type    : "select",
			options : [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
		},
		defaultValue : "Monday",
	},
	date : {
		type    : "number",
		control : {
			type : "range",
			min  : 1,
			max  : 31,
			step : 1,
		},
		defaultValue : 1,
	},
};

export const List = ({ quant = 31, ...args }) => {
	const dates = [];
	for (let i = 1; i <= quant; i++) {
		dates.push({
			active : i === 1,
			day    : "monday",
			date   : i,
			onClick(day, date) {
				console.log(day, date);
			},
			dark : args.dark
		});
	}

	return <DateCards
		{...args}
		dates={dates}
	       />;
};


export default Meta;