import { useState } from "react";
import Draggable from "react-draggable";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import nodeExceedsParentsWidth from "../../../helpers/node-exceeds-parents-width";
import Card from "../Cards/Card";
import Delete from "./TodoMini/DragBg/Delete";
import Done from "./TodoMini/DragBg/Done";
import TodoMini from "./TodoMini/TodoMini";

const animationMs = 500;

const Container = styled(Card)`
	cursor: pointer;

	> :not([class*="dragging"]) {
		transition: transform 0.2s ease-out;
	}

    @keyframes removeTodo {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
			/* transform: translateX(${({ dragDirection }) => dragDirection === "left" ? "-100%" : "100%"}); */
        }
    }

    &.remove-todo-exit-active  {
        animation: removeTodo ${animationMs}ms ease-out;
    }
`;

/**
 *
 * @param {TodoMini & {draggable: import("react-draggable").DraggableProps, dark: boolean, transitionIn?: boolean, exitThreshold? : number}} props
 *
 */
const TodoMiniDraggable = ({
	amPm,
	dark = false,
	draggable,
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
	transitionIn = true,
	exitThreshold = 0.3,
}) => {
	const [ originalPos, setOriginalPos ] = useState(null);
	const [ dragDirection, setDragDirection ] = useState(null);

	const resetPosition = () => transitionIn && setOriginalPos({
		x : 0,
		y : 0
	});

	const detectDragDirection = (_, { x }) => {
		setDragDirection(x < 0 ? "left" : "right");
	};

	const onStartHandler = (e, data) => {
		draggable.onStart(e, data);
		resetPosition();

	};

	const onDragHandler = (e, data) => {
		detectDragDirection(e, data);

		if (nodeExceedsParentsWidth(data.x, data.node, exitThreshold)) {
			setOriginalPos(null);
		}
	};

	const onStopHandler = (e, data) => {
		if (nodeExceedsParentsWidth(data.x, data.node, exitThreshold)) {
			draggable.onStop(e, data);
		} else {
			resetPosition();
		}
	};


	return (
		<CSSTransition
			appear
			classNames="remove-todo"
			in={transitionIn}
			mountOnEnter
			timeout={animationMs}
			unmountOnExit
		>
			<Container>
				{dragDirection === "left" ?
					<Delete dark={dark} /> :
					<Done dark={dark} />
				}
				<Draggable
					{...draggable}
					axis="x"
					onDrag={onDragHandler}
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
		</CSSTransition>
	);
};

export default TodoMiniDraggable;
