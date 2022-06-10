import styled from "styled-components";

const Text = styled.h3`
    text-overflow: ellipsis;
	overflow: hidden;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[4] : theme.colors.light.UI[7]};
	width: 100%;
	font: 900 1.6em "Nunito", sans-serif;
	letter-spacing: -0.03em;
	white-space: nowrap;
`;

const Input = styled(Text).attrs({
	as   : "input",
	type : "text"
})`
    outline: none;
    border: none;
    padding: 0;
	background: none;
`;

const Title = ({
	children: title,
	onTitleChange,
	edit = false,
	dark = false
}) => {
	return (
		<>
			{edit ?
				<Input
					dark={dark}
					edit={edit}
					onChange={onTitleChange}
					value={title}
				/> :
				<Text
					dark={dark}
				>
					{title}
				</Text>
			}
		</>
	);
};

export default Title;
