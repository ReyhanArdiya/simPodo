import styled from "styled-components";
import BlueCard from "./BlueCard";
import Card from "./Card";

/**
 * @type {import('@storybook/react').Meta}
 */
const Meta = {
	component : Card,
	title     : "Components/Cards/Card",
};

const StyledCard = styled(Card)`
    width: 10em;
    height: 10em;
`;

const Template = args => <StyledCard {...args} />;

export const Light = Template.bind({});
Light.parameters = { backgrounds : { default : "dark" } };
Light.args = { dark : false, };

export const Dark = Template.bind({});
Dark.args = { dark : true, };

const StyledBlueCard = styled(BlueCard)`
    width: 10em;
    height: 10em;
`;
export const Blue = args => <StyledBlueCard {...args} />;
Blue.args = { dark : false, };

export default Meta;