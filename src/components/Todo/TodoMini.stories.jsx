import { action } from "@storybook/addon-actions";
import { useState } from "react";
import TodoMini from "./TodoMini/TodoMini";
import TodoMiniDraggable from "./TodoMiniDraggable";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	args : {
		dark      : false,
		edit      : false,
		draggable : false,
		title     : "This is a todo",
		tagName   : "Important",
		tagColor  : "red",
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

};

export const Default = ({ draggable, ...args }) => {
	args.onAmPmClick = action("Clicked AM/PM");
	args.onDelete = action("Clicked Delete");
	args.onEdit = action("Clicked Edit");
	args.onEditDiscard = action("Clicked Discard");
	args.onEditDone = action("Clicked Done");
	args.onHourClick = action("Clicked Hour");
	args.onMinuteClick = action("Clicked Minute");
	args.onTagClick = action("Clicked Tag");
	args.onTitleChange = action("Changed Title");
	args.onTodoFinish = action("Clicked Finish");

	const [ show, setShow ] = useState(true);

	const removeTodo = () => {
		setShow(false);
		setTimeout(
			() => {
				setShow(true);
			},
			1000
		);
	};

	if (!draggable) {
		return <TodoMini {...args} />;
	} else {
		return <TodoMiniDraggable
			{...args}
			draggable={{
				onStart : action("Started Dragging"),
				onStop  : e => {
					action("Activates when out of exitThreshold")(e);
					removeTodo();
				},
			}}
			transitionIn={show}
		       />;
	}
};
Default.storyName = "TodoMini";


export default Meta;