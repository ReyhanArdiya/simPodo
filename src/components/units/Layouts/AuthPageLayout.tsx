import type { ReactNode } from "react";
import styled from "styled-components";
import type { DarkMode } from "../../../types/dark-mode.interface";
import BlueCard from "../Cards/BlueCard";
import GradientRect from "../Shapes/GradientRect";

const Container = styled(BlueCard)`
	align-items: center;
	border-radius: 0;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: flex-start;
	min-height: 76.8em;
	position: relative;
	width: 100vw;

	padding: 0 3.8em;
	padding-top: 11em;
`;

const Title = styled.h1<{ dark?: boolean }>`
	font: 900 5.6em "Inter", sans-serif;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
	text-align: center;
`;

const StyledGradientRect = styled(GradientRect)`
	width: 16em;
	height: 22em;
`;

const GR1 = styled(StyledGradientRect)`
	top: 0;
	right: 0;
`;

const GR2 = styled(StyledGradientRect)`
	left: 0;
`;

const GR3 = styled(StyledGradientRect)`
	bottom: 0;
	right: 0;
`;

export interface AuthPageLayoutProps extends DarkMode {
    children: ReactNode;
    title: string;
    id?: string;
}

const AuthPageLayout = ({
	children,
	title,
	id = "",
	dark = false
}: AuthPageLayoutProps) => (
	<Container as="section" id={id}>
		<GR1 />
		<GR2 />
		<GR3 />
		<Title dark={dark}>{title}</Title>
		{children}
	</Container>
);

export default AuthPageLayout;
