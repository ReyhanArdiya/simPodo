import styled from "styled-components";

const Container = styled.p<{ dark?: boolean }>`
	font: 700 2.4em/1.5em "Inter", sans-serif;
	text-align: center;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
	letter-spacing: -0.02em;
	z-index: 2;
`;

const EmptyContent = () => <Container>Nothing Todo Today!</Container>;

export default EmptyContent;
