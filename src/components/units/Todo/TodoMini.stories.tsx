import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import TodoMini from "./TodoMini/TodoMini";
import TodoMiniDraggable from "./TodoMiniDraggable";

interface Args {
	dark: boolean;
	edit: boolean;
	draggable: boolean;
	title: string;
	tagName: string;
	tagColor: string;
	amPm: string;
	hours: number;
	minutes: number;
}

const meta: Meta<Args> = {
	args : {
		dark      : false,
		edit      : false,
		draggable : false,
		title     : "This is a todo",
		tagName   : "Important",
		tagColor  : "red"
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
	}
};

const todoHandlerActions = {
	onAmPmClick   : action("Clicked AM/PM"),
	onDelete      : action("Clicked Delete"),
	onEdit        : action("Clicked Edit"),
	onEditDiscard : action("Clicked Discard"),
	onEditDone    : action("Clicked Done"),
	onHourClick   : action("Clicked Hour"),
	onMinuteClick : action("Clicked Minute"),
	onTagClick    : action("Clicked Tag"),
	onTitleChange : action("Changed Title"),
	onTodoFinish  : action("Clicked Finish"),
};

export const Default: StoryFn<Args> = ({ draggable, ...args }) => {
	const [ show, setShow ] = useState(true);

	const removeTodo = () => {
		setShow(false);
		setTimeout(() => {
			setShow(true);
		}, 1000);
	};

	if (!draggable) {
		return <TodoMini
			{...args}
			{...todoHandlerActions}
		/>;
	} else {
		return (
			<TodoMiniDraggable
				{...args}
				{...todoHandlerActions}
				onDragStart={action("Started Dragging")}
				onDragStop={e => {
					action("Activates when out of exitThreshold")(e);
					removeTodo();
				}}
				transitionIn={show}
			/>
		);
	}
};
Default.storyName = "TodoMini";

export default meta;
