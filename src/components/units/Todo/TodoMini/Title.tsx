import styled from "styled-components";
import type { TitleProps } from "./interfaces/title-props.interface";

const Text = styled.h3<{ dark?: boolean }>`
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[4] : theme.colors.light.UI[7]};
	width: 100%;
	font: 900 1.6em "Nunito", sans-serif;
	letter-spacing: -0.03em;
	white-space: nowrap;
`;

const Input = styled(Text)`
	outline: none;
	border: none;
	padding: 0;
	background: none;
`;

const Title = ({
	title,
	onTitleChange,
	edit = false,
	dark = false
}: TitleProps) => edit ?
	<Input
		as="input"
		dark={dark}
		defaultValue={title}
		onChange={onTitleChange}
	/>	:
	<Text dark={dark}>{title}</Text>;

export default Title;
