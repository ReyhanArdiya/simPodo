import { useState } from "react";
import Draggable, {
	DraggableEventHandler,
	DraggableProps
} from "react-draggable";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import nodeExceedsParentsWidth from "../../../helpers/node-exceeds-parents-width";
import Card from "../Cards/Card";
import Delete from "./TodoMini/DragBg/Delete";
import Done from "./TodoMini/DragBg/Done";
import type { TodoMiniProps } from "./TodoMini/interfaces/todo-mini-props.interface";
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
		}
	}

	&.remove-todo-exit-active {
		animation: removeTodo ${animationMs}ms ease-out;
	}
`;

export interface TodoMiniDraggableProps extends TodoMiniProps {
	draggable?: DraggableProps;
	dark: boolean;
	transitionIn?: boolean;
	exitThreshold?: number;
	onDragStart: DraggableEventHandler;
	onDragStop: DraggableEventHandler;
}

const TodoMiniDraggable = ({
	amPm,
	dark = false,
	draggable,
	edit = false,
	exitThreshold = 0.3,
	hours,
	minutes,
	onAmPmClick,
	onDelete,
	onDragStart,
	onDragStop,
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
}: TodoMiniDraggableProps) => {
	type originalPosTypes = undefined | { x: number; y: number };
	const [ originalPos, setOriginalPos ] = useState<originalPosTypes>();
	const [ dragDirection, setDragDirection ] = useState<undefined | string>();

	const resetPosition = () => transitionIn &&
		setOriginalPos({
			x : 0,
			y : 0
		});

	const detectDragDirection: DraggableEventHandler = (_, { x }) => {
		setDragDirection(x < 0 ? "left" : "right");
	};

	const onStartHandler: DraggableEventHandler = (e, data) => {
		onDragStart(e, data);
		resetPosition();
	};

	const onDragHandler: DraggableEventHandler = (e, data) => {
		detectDragDirection(e, data);

		if (nodeExceedsParentsWidth(data.x, data.node, exitThreshold)) {
			setOriginalPos(undefined);
		}
	};

	const onStopHandler: DraggableEventHandler = (e, data) => {
		if (nodeExceedsParentsWidth(data.x, data.node, exitThreshold)) {
			onDragStop(e, data);
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
					<Delete dark={dark} />				:
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
