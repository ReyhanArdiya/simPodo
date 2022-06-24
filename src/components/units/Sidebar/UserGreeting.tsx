import styled from "styled-components";

const Container = styled.h2`
	font: 900 2em "Nunito", sans-serif;
	text-align: right;
	/* width: 62%; */
	width: 100%;
	/* padding-right: 9.4%; */
`;

const Username = styled.span<{ dark?: boolean }>`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};
`;

interface UserGreetingProps {
	children: string;
	dark?: boolean;
}

const UserGreeting = ({
	children: username,
	dark = false
}: UserGreetingProps) => {
	return (
		<Container>
			Hello, <br /> <Username dark={dark}>{username}</Username>!
		</Container>
	);
};

export default UserGreeting;
