import styled from "styled-components";
import BlueCard from "../Cards/BlueCard";
import GradientRect from "../Shapes/GradientRect";

const Container = styled(BlueCard).attrs({ as : "section" })`
    display: flex;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
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

const AuthPageLayout = ({ children }) => {
	return (
		<Container>
			<GR1 />
			<GR2 />
			<GR3 />
			{children}
		</Container>
	);
};

export default AuthPageLayout;