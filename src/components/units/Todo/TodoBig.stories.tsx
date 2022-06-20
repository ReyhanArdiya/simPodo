import { action } from "@storybook/addon-actions";
import TodoBig from "./TodoBig";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	args : {
		dark     : false,
		edit     : false,
		title    : "This is a todo",
		tagName  : "Important",
		tagColor : "red",
		detail   : "This is a todo",
	},
	argTypes : {
		amPm : {
			control : {
				type    : "radio",
				options : [ "am", "pm" ],
			},
			defaultValue : "am",
		},
		hours : {
			control : {
				type : "range",
				min  : 1,
				max  : 12,
			},
			defaultValue : 1,
		},
		minutes : {
			control : {
				type : "range",
				min  : 0,
				max  : 59,
			},
			defaultValue : 0,
		},
	},
	component : TodoBig,
};

export const Default = args => {
	args.onAmPmClick = action("Clicked AM/PM");
	args.onDelete = action("Clicked Delete");
	args.onEdit = action("Clicked Edit");
	args.onDetailChange = action("Changed Detail");
	args.onEditDiscard = action("Clicked Discard");
	args.onEditDone = action("Clicked Done");
	args.onHourClick = action("Clicked Hour");
	args.onMinuteClick = action("Clicked Minute");
	args.onTagClick = action("Clicked Tag");
	args.onTitleChange = action("Changed Title");
	args.onTodoFinish = action("Clicked Finish");


	return <TodoBig {...args} />;
};
Default.storyName = "TodoBig";


export default Meta;