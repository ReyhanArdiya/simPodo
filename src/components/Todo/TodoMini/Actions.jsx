import styled from "styled-components";
import Checkbox from "../../Buttons/Icons/Checkbox";
import Pen from "../../Buttons/Icons/Pen";
import Trash from "../../Buttons/Icons/Trash";

const ThreeButtonsLayout = styled.div`
	width: 100%;
	display: grid;
	justify-items: end;
	align-items: center;
	grid-template-columns: repeat(2, max-content) 1fr;

	> :nth-child(2) {
		margin-left: 1.1em;
	}
`;

const TwoButtonsLayout = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	gap: 1.1em;
`;

const Actions = ({
	onDelete,
	onEdit,
	onEditDiscard,
	onEditDone,
	onTodoFinish,
	edit = false,
	dark = false
}) => {
	return (
		<>
			{
				edit ?
					<TwoButtonsLayout>
						<Trash
							dark={dark}
							edit={edit}
							onClick={onEditDiscard}
						/>
						<Checkbox
							dark={dark}
							edit={edit}
							onClick={onEditDone}
						/>
					</TwoButtonsLayout> :
					<ThreeButtonsLayout>
						<Checkbox
							dark={dark}
							onClick={onTodoFinish}
						/>
						<Trash
							dark={dark}
							onClick={onDelete}
						/>
						<Pen
							dark={dark}
							onClick={onEdit}
						/>
					</ThreeButtonsLayout>
			}
		</>
	);
};

export default Actions;