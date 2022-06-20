import styled from "styled-components";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	z-index: 2;
    height: 100%;
    gap: 0.5em;
`;

const Text = styled.p`
	font: 700 1.3em "Inter", sans-serif;
	text-align: center;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
`;

const Counter = styled(Text)`
	font-size: 3.2em;
	letter-spacing: -0.02em;
	line-height: 1.2em;
`;

const Small = styled(Text).attrs({ as : "small" })`
	font: 700 1.2em "Nunito", sans-serif;
	color: #dcdee9;
	position: absolute;
	bottom: 3.5%;
    z-index: 2;
`;

const CountingContent = ({ finished, total }) => {
	finished = finished < 10 ? `0${finished}` : finished;
	total = total < 10 ? `0${total}` : total;

	return (
		<>
			<Container>
				<Text>You&apos;ve Done...</Text>
				<Counter>
					{finished}/{total}
				</Counter>
				<Text>Todos</Text>
			</Container>
			<Small>Keep it up!</Small>
		</>
	);
};

export default CountingContent;
