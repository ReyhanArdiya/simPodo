import styled from "styled-components";
import BouncyMove from "../Animations/BouncyMove";

const Container = styled.svg.attrs({
	viewBox : "0 0 20 16",
	xmlns   : "http://www.w3.org/2000/svg"
})`
	fill: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};
	max-height: 1.563em;
	max-width: 1.947em;
	${({ theme }) => theme.effects.hoverClick}
`;

const LeftArrowButt = ({ onClick, dark = false }) => {
	return (
		<BouncyMove onClick={onClick}>
			<Container dark={dark}>
				<path d="M9.71863 6.98486L16.3593 0.344238C16.8182 -0.114746 17.5604 -0.114746 18.0145 0.344238L19.118 1.44775C19.577 1.90674 19.577 2.64893 19.118 3.10303L14.4159 7.81494L19.1229 12.522C19.5819 12.981 19.5819 13.7231 19.1229 14.1772L18.0194 15.2856C17.5604 15.7446 16.8182 15.7446 16.3641 15.2856L9.72351 8.64502C9.25965 8.18604 9.25965 7.44385 9.71863 6.98486ZM0.34363 8.64502L6.98426 15.2856C7.44324 15.7446 8.18543 15.7446 8.63953 15.2856L9.74304 14.1821C10.202 13.7231 10.202 12.981 9.74304 12.5269L5.0409 7.81494L9.74793 3.10791C10.2069 2.64893 10.2069 1.90674 9.74793 1.45264L8.64441 0.344238C8.18543 -0.114746 7.44324 -0.114746 6.98914 0.344238L0.348513 6.98486C-0.115354 7.44385 -0.115354 8.18604 0.34363 8.64502Z" />
			</Container>
		</BouncyMove>
	);
};

export default LeftArrowButt;
