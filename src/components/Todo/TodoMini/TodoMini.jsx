import styled from "styled-components";
import Card from "../../Cards/Card";
import Time from "./Time";

const Container = styled(Card).attrs({ as : "article" })``;

const TodoMini = ({
	amPm = "am",
	dark = false,
	edit = false,
	hours = 0,
	minutes = 0,
	onAmPmClick = () => undefined,
	onDelete = () => undefined,
	onEdit = () => undefined,
	onEditDiscard = () => undefined,
	onEditDone = () => undefined,
	onFinish = () => undefined,
	onHourClick = () => undefined,
	onMinuteClick = () => undefined,
	onTagClick = () => undefined,
	tagName = "",
	title = "",
}) => {
	return <Container>
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

	</Container>;
};

export default TodoMini;
