import styled from "styled-components";
import Card from "../../Cards/Card";
import Actions from "./Actions";
import Tag from "./Tag";
import Time from "./Time";
import Title from "./Title";

const Container = styled(Card).attrs({ as : "article" })`
	display: grid;
	grid-template-areas:
		"time"
		"tag"
		"title"
		"actions";
	grid-template-columns: 1fr;
	padding: 0.3em 0.8em 0.7em 1em;

	height: 9em;
	width: 22.2em;

	> :nth-child(1) {
		margin-bottom: -0.5em;
	}

	> :nth-child(2) {
		margin-bottom: -0.5em;
	}
`;

/**
 *
 * @param {{
 *	amPm : string,
 *	dark? : boolean,
 *	edit? : boolean,
 *	hours : number,
 *	minutes : number,
 *	onAmPmClick : EventListener,
 *	onDelete : EventListener,
 *	onEdit : EventListener,
 *	onEditDiscard : EventListener,
 *	onEditDone : EventListener,
 *	onHourClick : EventListener,
 *	onMinuteClick : EventListener,
 *	onTagClick : EventListener,
 *	onTitleChange : EventListener,
 *	onTodoFinish : EventListener,
 *	tagColor : string,
 *	tagName : string,
 *	title : string
 *
 * }} props
 *
 * @returns
 */
const TodoMini = ({
	amPm,
	dark = false,
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
}) => {
	return (
		<Container dark={dark}>
			<Time
				amPm={amPm}
				dark={dark}
				edit={edit}
				hours={hours}
				minutes={minutes}
				onAmPmClick={onAmPmClick}
				onHourClick={onHourClick}
				onMinuteClick={onMinuteClick}
			/>
			<Tag
				color={tagColor}
				onClick={onTagClick}
			>
				{tagName}
			</Tag>
			<Title
				dark={dark}
				edit={edit}
				onTitleChange={onTitleChange}
			>
				{title}
			</Title>
			<Actions
				dark={dark}
				edit={edit}
				onDelete={onDelete}
				onEdit={onEdit}
				onEditDiscard={onEditDiscard}
				onEditDone={onEditDone}
				onTodoFinish={onTodoFinish}
			/>
		</Container>
	);
};

export default TodoMini;
