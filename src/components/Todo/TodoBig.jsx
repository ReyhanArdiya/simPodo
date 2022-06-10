import styled from "styled-components";
import Card from "../Cards/Card";
import TodoMini from "./TodoMini/TodoMini";

const Container = styled(Card).attrs({ as : "article" })`
    flex-direction: column;
    min-height: 22.4em;
    ${({ dark, theme }) => !dark && theme.effects.boxShadows[3]}
`;

const Detail = styled.textarea`
    border: none;
    outline: none;
    background: none;
    width: 100%;
    height: 100%;
    font: 400 1.2em "Inter", sans-serif;
    letter-spacing: -0.03em;
    resize: none;
    padding: 0.75em 0.9166666666666666em 1.25em 0.9166666666666666em;
    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[7]};

    ::-webkit-scrollbar {
        width: 0.5em;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-bottom: 1.25em;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[4] : theme.colors.light.UI[6]};
        border-radius: 1em;
    }
`;

/**
 *
 * @param {TodoMini & {detail : string, onDetailChange : EventListener}} props
 *
 * @returns
 */
const TodoBig = ({
	amPm,
	className = "",
	dark = false,
	detail,
	edit = false,
	hours,
	minutes,
	onAmPmClick,
	onDelete,
	onDetailChange,
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
		<Container
			className={className}
			dark={dark}
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
			<Detail
				dark={dark}
				onChange={onDetailChange}
				readOnly={!edit}
			>{detail}</Detail>
		</Container>
	);
};

// CMT TodoBig is only used when mounting and unmount from modal and while ediitng which means
// it is going to always rerender a lot, so I don't memoize it.
export default TodoBig;