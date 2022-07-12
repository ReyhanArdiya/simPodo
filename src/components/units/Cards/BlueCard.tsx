import styled from "styled-components";
import Card from "./Card";

const BlueCard = styled(Card)`
	& {
		background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
	}
`;

export default BlueCard;
