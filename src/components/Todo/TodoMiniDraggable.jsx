import { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Card from "../Cards/Card";
import Delete from "./TodoMini/DragBg/Delete";
import Done from "./TodoMini/DragBg/Done";
import TodoMini from "./TodoMini/TodoMini";

const Container = styled(Card)`
	cursor: pointer;

	> :not([class*="dragging"]) {
		transition: transform 0.2s ease-out;
	}
`;

/**
 *
 * @param {TodoMini & {draggable: import("react-draggable").DraggableProps, dark: boolean}} props
 *
 */
const TodoMiniDraggable = ({
	amPm,
	edit = false,
	hours,
	minutes,
	onAmPmClick,
	onDelete,
	onEdit,
	onEditDiscard,
	onEditDone,
	onHourClick,
	onMinuteClick,
	onTagClick,
	onTitleChange,
	onTodoFinish,
	tagColor,
	tagName,
	title,
	dark = false,
	draggable,
}) => {
	const [ originalPos, setOriginalPos ] = useState(null);
	const [ dragDirection, setDragDirection ] = useState(null);

	const resetPosition = () => setOriginalPos({
		x : 0,
		y : 0
	});

	const onStartHandler = (e, data) => {
		resetPosition();
		draggable.onStart(e, data);
	};

	const onStopHandler = (e, data) => {
		resetPosition();
		draggable.onStop(e, data);
	};

	const detectDragDirection = (_, { x }) => {
		setDragDirection(x < 0 ? "left" : "right");
	};

	return (
		<Container>
			{dragDirection === "left" ?
				<Delete dark={dark} /> :
				<Done dark={dark} />
			}
			<Draggable
				{...draggable}
				axis="x"
				onDrag={detectDragDirection}
				onStart={onStartHandler}
				onStop={onStopHandler}
				position={originalPos}
			>
				<TodoMini
					amPm={amPm}
					dark={dark}
					edit={edit}
					hours={hours}
					minutes={minutes}
					onAmPmClick={onAmPmClick}
					onDelete={onDelete}
					onEdit={onEdit}
					onEditDiscard={onEditDiscard}
					onEditDone={onEditDone}
					onHourClick={onHourClick}
					onMinuteClick={onMinuteClick}
					onTagClick={onTagClick}
					onTitleChange={onTitleChange}
					onTodoFinish={onTodoFinish}
					tagColor={tagColor}
					tagName={tagName}
					title={title}
				/>
			</Draggable>
		</Container>
	);
};

export default TodoMiniDraggable;
