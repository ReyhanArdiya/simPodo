import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import TodoBig from "./TodoBig";

interface Args {
	dark: boolean;
	edit: boolean;
	title: string;
	tagName: string;
	tagColor: string;
	detail: string;
	amPm: string;
	hours: number;
	minutes: number;
}

const meta: Meta<Args> = {
	args : {
		dark     : false,
		edit     : true,
		title    : "This is a todo",
		tagName  : "Important",
		tagColor : "red",
		detail   : "This is a todo"
	},
	argTypes : {
		amPm : {
			control : {
				type    : "radio",
				options : [ "am", "pm" ]
			},
			defaultValue : "am"
		},
		hours : {
			control : {
				type : "range",
				min  : 1,
				max  : 12
			},
			defaultValue : 1
		},
		minutes : {
			control : {
				type : "range",
				min  : 0,
				max  : 59
			},
			defaultValue : 0
		}
	},
	component : TodoBig
};

export const Default: StoryFn<Args> = args => {
	const todoBigActions = {
		onAmPmClick    : action("Clicked AM/PM"),
		onDelete       : action("Clicked Delete"),
		onEdit         : action("Clicked Edit"),
		onDetailChange : action("Changed Detail"),
		onEditDiscard  : action("Clicked Discard"),
		onEditDone     : action("Clicked Done"),
		onHourClick    : action("Clicked Hour"),
		onMinuteClick  : action("Clicked Minute"),
		onTagClick     : action("Clicked Tag"),
		onTitleChange  : action("Changed Title"),
		onTodoFinish   : action("Clicked Finish"),
	};


	return <TodoBig {...args} {...todoBigActions} />;
};
Default.storyName = "TodoBig";

export default meta;
